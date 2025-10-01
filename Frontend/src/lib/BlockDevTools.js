export default function block() {
    document.onkeydown = function (e) {
        if (
            e.keyCode == 123 || // F12
            (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && e.key === "C") || // Ctrl+Shift+C
            (e.ctrlKey && e.key === "U") // Ctrl+U
        ) {
            return false;
        }
    };
    setInterval(function () {
        if (
            window.outerWidth - window.innerWidth > 200 ||
            window.outerHeight - window.innerHeight > 200
        ) {
            document.title="Access denied 🚫";
            document.body.innerHTML = `
          <div class="fixed inset-0 bg-black text-white flex items-center justify-center z-[99999] p-6 text-center font-sans">
            <div class="max-w-xl">
             <h1 class="text-2xl font-bold mb-3">DevTools detected — Access denied 🚫</h1>
             <p class="mb-4 opacity-90">For security reasons this page is blocked while developer tools are open. Close DevTools and press Retry.</p>
            <div class="space-x-3">
             <button id="dt-retry" class="px-4 py-2 rounded-md bg-white text-black font-medium">Retry</button>
             <button id="dt-close" class="px-4 py-2 rounded-md border border-gray-300 text-white">Close (ignore)</button>
            </div>
          </div>
        </div>
`;


        }
    }, 10);
}