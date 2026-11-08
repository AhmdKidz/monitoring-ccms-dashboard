/**
 * GOOGLE APPS SCRIPT - WEB APP MONITORING ADKON & CCMS (WIKA DIVISI 1)
 * Cara Pakai:
 * 1. Buat file `Code.gs` di Google Apps Script dan tempelkan kode ini.
 * 2. Buat file HTML bernama `Index.html` (perhatikan huruf I besar) dan tempelkan isi dari `appscript/Index.html`.
 * 3. Klik Deploy -> New deployment -> Web app (Execute as: Me, Who has access: Anyone).
 */

const SPREADSHEET_ID = '139JB1xkZd9jp44Xrb6FrT4vgamycWJAvxVwnjCskzzg';
const SHEET_NAME = 'Cheklist_20_Dokumen';

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Monitoring ADKON & CCMS - WIKA Divisi 1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Fungsi opsional untuk mengambil data langsung dari Google Sheet bila ingin dinamis dari Spreadsheet.
 * Jika struktur baris belum diubah, Web App otomatis memakai snapshot 51 proyek bawaan yang sudah terpasang.
 */
function getCCMSDataFromSheet() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) return [];
    // Kembalikan array kosong agar menggunakan snapshot bawaan yang sudah tervalidasi,
    // atau kustomisasi parsing baris sesuai kebutuhan di sini.
    return [];
  } catch (err) {
    Logger.log(err);
    return [];
  }
}
