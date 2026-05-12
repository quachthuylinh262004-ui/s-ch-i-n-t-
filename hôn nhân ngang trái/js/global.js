window.addEventListener('keydown', function(e) {
    // 1. Chặn phím PrintScreen (Chụp màn hình)
    if (e.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // Xóa clipboard
        alert("Tính năng chụp màn hình bị hạn chế.");
        e.preventDefault();
    }

    // 2. Chặn Ctrl + C (Copy), Ctrl + U (View Source), Ctrl + Shift + I (Inspect)
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 'i' || e.shiftKey && e.key === 'I')) {
        // Lưu ý: Chúng ta cho phép bôi đen, nhưng khi nhấn Ctrl+C sẽ không có tác dụng
        e.preventDefault();
        return false;
    }
    
    // 3. Chặn các phím tắt chụp màn hình của Windows (Win + Shift + S) hoặc Mac
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
    }
}, Buffer);

// 4. Chặn menu chuột phải
document.addEventListener('contextmenu', event => event.preventDefault());

// 5. Chặn sự kiện Copy/Cut/Paste
document.addEventListener('copy', (e) => {
    e.preventDefault();
});
document.addEventListener('cut', (e) => {
    e.preventDefault();
});

// 6. Xóa clipboard liên tục nếu phát hiện hành vi khả nghi (tùy chọn)
document.addEventListener('keyup', function (e) {
    if (e.key === "PrintScreen") {
        if (navigator.clipboard) {
            navigator.clipboard.writeText("Nội dung được bảo vệ.");
        }
    }
});