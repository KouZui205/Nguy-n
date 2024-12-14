function showGreeting() {
    const nameInput = document.getElementById("nameInput").value;

    // Kiểm tra nếu người dùng chưa nhập tên
    if (nameInput.trim() === "") {
        alert("Vui lòng nhập tên!");
        return;
    }

    // Ẩn phần nhập tên
    document.querySelector(".input-box").style.display = "none";

    // Phát nhạc nền
    const audio = document.getElementById("birthdayAudio");
    audio.play();

    // Hiển thị các lời chúc theo từng thời gian
    let currentGreeting = 1;

    // Hàm hiển thị các lời chúc và ảnh
    function displayGreeting(greetingId) {
        const greeting = document.getElementById(greetingId);
        greeting.classList.remove("hidden");
        greeting.classList.add("show");

        // Ẩn phần tử sau 4 giây
        setTimeout(() => {
            greeting.classList.remove("show");
            greeting.classList.add("hidden");

            // Chuyển đến lời chúc tiếp theo hoặc kết thúc
            if (currentGreeting < 3) {
                currentGreeting++;
                displayGreeting(`greeting${currentGreeting}`);
            } else {
                // Hiển thị lời chúc cuối cùng
                const finalGreeting = document.querySelector(".final-greeting");
                finalGreeting.classList.remove("hidden");
                finalGreeting.classList.add("show");
                document.getElementById("finalName").innerText = nameInput;
            }
        }, 4000); // Thời gian hiển thị mỗi lời chúc là 4 giây
    }

    // Bắt đầu hiển thị lời chúc đầu tiên
    displayGreeting(`greeting${currentGreeting}`);
}
