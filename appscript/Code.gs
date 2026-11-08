/**
 * GOOGLE APPS SCRIPT - WEB APP MONITORING ADKON & CCMS (WIKA DIVISI 1)
 * Terhubung Langsung ke Google Sheet: 051026 Cheklist Adkon Dashboard Rev
 * Spreadsheet ID: 1_HyDeqYkUB-HdLJwGLEUgx1nOmOoIx-OGDCgZGRvE4w (Sheet: Cheklist)
 *
 * Cara Pakai:
 * 1. Buat file `Code.gs` di Google Apps Script dan tempelkan kode ini.
 * 2. Buat file HTML bernama `Index.html` (perhatikan huruf I besar) dan tempelkan isi dari `appscript/Index.html`.
 * 3. Klik Deploy -> New deployment -> Web app (Execute as: Me, Who has access: Anyone).
 */

const SPREADSHEET_ID = '1_HyDeqYkUB-HdLJwGLEUgx1nOmOoIx-OGDCgZGRvE4w';
const SHEET_NAME = 'Cheklist';

const CM_KEYS = [
  "CCMS", "Do. Kontrak + Amandemen", "SPP", "SPMK", "BASTL",
  "Jaminan UM", "Jaminan Pelaksanaan", "Polis Asuransi", "TDK", "RKP Bab 12",
  "Cheklist Progress", "Executive Summary", "EoT", "MoM Ekst."
];

const VO_KEYS = [
  "Klaim Konstruksi", "Anti Klaim", "Asuransi Konstruksi",
  "Perubahan/ VO", "Manajemen Risiko", "Daftar Ketidaksesuaian"
];

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Monitoring ADKON & CCMS - WIKA Divisi 1 (051026)')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Mengambil seluruh baris proyek terbaru langsung dari Google Sheet `Cheklist`.
 * Setiap penambahan, pengurangan, atau perubahan data di Spreadsheet otomatis terupdate di Web App.
 */
function getCCMSDataFromSheet() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    if (!sheet) return [];

    const rawRows = sheet.getDataRange().getValues();
    const parsedProjects = [];
    let deptName = "";
    let deptCode = "";

    for (let i = 0; i < rawRows.length; i++) {
      const cells = rawRows[i];
      if (!cells || cells.length === 0) continue;
      const c0 = String(cells[0] == null ? "" : cells[0]).trim();
      const c1 = String(cells[1] == null ? "" : cells[1]).trim();

      if (c0.toUpperCase().indexOf("CONTRACT MANAGEMENT") !== -1 || c0.toUpperCase() === "LENGKAP") {
        break;
      }
      if (c0.indexOf("Departemen Operasi 1") !== -1) {
        deptName = "Departemen Operasi 1";
        deptCode = "DO 1";
        continue;
      }
      if (c0.indexOf("Departemen Operasi 2") !== -1) {
        deptName = "Departemen Operasi 2";
        deptCode = "DO 2";
        continue;
      }
      if (c0.indexOf("Departemen Operasi 3") !== -1) {
        deptName = "Departemen Operasi 3";
        deptCode = "DO 3";
        continue;
      }

      const isNumberedRow = /^\d+/.test(c0);
      if (deptCode && c1 && (isNumberedRow || (cells[16] !== "" && cells[16] !== null && cells[16] !== undefined))) {
        const noNum = parseFloat(c0.replace(/[^\d.]/g, "")) || (parsedProjects.length + 1);
        const p = {
          _id: parsedProjects.length + 1,
          "No": noNum,
          "Nama Proyek": c1,
          "Departemen": deptName,
          "Kode Dept": deptCode
        };

        let cmScore = 0;
        for (let kIdx = 0; kIdx < CM_KEYS.length; kIdx++) {
          const cellVal = String(cells[2 + kIdx] == null ? "" : cells[2 + kIdx]).trim();
          const isChecked = (cellVal === "✓" || cellVal === "v" || cellVal === "V" || cellVal === "✔" || cellVal === "1" || cellVal.toUpperCase() === "TRUE");
          p[CM_KEYS[kIdx]] = isChecked ? "✓" : "";
          if (isChecked) cmScore++;
        }
        if (typeof cells[16] === "number" && !isNaN(cells[16])) {
          cmScore = Math.round(cells[16]);
        }
        p["Skor CM"] = cmScore;
        p["Status CM"] = cmScore === 14 ? "Lengkap" : (cmScore === 0 ? "Belum Diisi" : "Belum Lengkap");

        let voScore = 0;
        for (let vIdx = 0; vIdx < VO_KEYS.length; vIdx++) {
          const cellVal = String(cells[19 + vIdx] == null ? "" : cells[19 + vIdx]).trim();
          const isChecked = (cellVal === "✓" || cellVal === "v" || cellVal === "V" || cellVal === "✔" || cellVal === "1" || cellVal.toUpperCase() === "TRUE");
          p[VO_KEYS[vIdx]] = isChecked ? "✓" : "";
          if (isChecked) voScore++;
        }
        if (typeof cells[25] === "number" && !isNaN(cells[25])) {
          voScore = Math.round(cells[25]);
        }
        p["Skor VO"] = voScore;
        p["Status VO"] = voScore === 6 ? "Lengkap" : (voScore === 0 ? "Belum Diisi" : "Belum Lengkap");

        const tot = cmScore + voScore;
        p["Total Dokumen"] = tot;
        const pct = (tot / 20.0) * 100.0;
        p["Persen Kepatuhan"] = pct.toFixed(1) + "%";
        p["Kategori Status"] = tot === 20 ? "Lengkap 100%" : (tot === 0 ? "Kritis 0%" : (pct < 50 ? "Kritis (<50%)" : "Perlu Tindak Lanjut"));
        p["Catatan Khusus ADKON"] = cells[30] ? String(cells[30]).trim() : null;

        parsedProjects.push(p);
      }
    }

    return parsedProjects;
  } catch (err) {
    Logger.log(err);
    return [];
  }
}
