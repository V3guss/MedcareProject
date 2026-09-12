function checkRights() {

    alert("กำลังเข้าสู่ระบบตรวจสอบสิทธิ์การรักษา");

}


function consultDoctor() {

    alert("กำลังเข้าสู่ระบบปรึกษาแพทย์ออนไลน์");

}




function checkRight() {

    const citizenId = document.getElementById("citizen-id").value.trim();
    const result = document.getElementById("result");

    // กรอกไม่ครบ 13 หลัก
    if (citizenId.length !== 13) {

        result.textContent =
            "⚠ กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก";

        result.style.color = "#d92d20";

        return;
    }

    // ต้องเป็นตัวเลขเท่านั้น
    if (!/^\d{13}$/.test(citizenId)) {

        result.textContent =
            "⚠ กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก";

        result.style.color = "#d92d20";

        return;
    }

    // ตัวอย่างเลขบัตรที่มีสิทธิ์
    const registeredIds = [
        "1129701338909",
        "1129901909398",
        "1111111111111",
        "2222222222222",
        "1234567898765",
        "1212312121555"
    ];

    // ตรวจสอบเลขบัตร
    if (registeredIds.includes(citizenId)) {

        result.textContent =
            "✓ พบสิทธิ์การรักษา";

        result.style.color = "#12b76a";

    } else {

        result.textContent =
            "✕ ไม่พบเลขบัตรประชาชนนี้ หรือไม่พบสิทธิ์การรักษา";

        result.style.color = "#d92d20";
    }
}





function savePersonalInfo() {

    // =========================
    // รับค่าจากช่องกรอก
    // =========================

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const gender = document.getElementById("gender");
    const birthDate = document.getElementById("birthDate");
    const phone = document.getElementById("phone");

    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const disease = document.getElementById("disease");
    const allergy = document.getElementById("allergy");

    let valid = true;


    // =========================
    // ล้างข้อความแจ้งเตือนเดิม
    // =========================

    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    document.querySelectorAll(
        "input, select, textarea"
    ).forEach(function(input) {

        input.classList.remove("input-error");

    });


    // =========================
    // ตรวจสอบชื่อ
    // =========================

    if (firstName.value.trim() === "") {

        document.getElementById("firstNameError").textContent =
            "⚠ กรุณากรอกชื่อ";

        firstName.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบนามสกุล
    // =========================

    if (lastName.value.trim() === "") {

        document.getElementById("lastNameError").textContent =
            "⚠ กรุณากรอกนามสกุล";

        lastName.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบเพศ
    // =========================

    if (gender.value === "") {

        document.getElementById("genderError").textContent =
            "⚠ กรุณาเลือกเพศ";

        gender.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบวันเกิด
    // =========================

    if (birthDate.value === "") {

        document.getElementById("birthDateError").textContent =
            "⚠ กรุณาเลือกวันเกิด";

        birthDate.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบเบอร์โทรศัพท์
    // =========================

    if (phone.value.trim() === "") {

        document.getElementById("phoneError").textContent =
            "⚠ กรุณากรอกเบอร์โทรศัพท์";

        phone.classList.add("input-error");

        valid = false;

    } else if (!/^\d{10}$/.test(phone.value)) {

        document.getElementById("phoneError").textContent =
            "⚠ เบอร์โทรศัพท์ต้องมี 10 หลัก";

        phone.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบน้ำหนัก
    // =========================

    if (weight.value.trim() === "") {

        document.getElementById("weightError").textContent =
            "⚠ กรุณากรอกน้ำหนัก";

        weight.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบส่วนสูง
    // =========================

    if (height.value.trim() === "") {

        document.getElementById("heightError").textContent =
            "⚠ กรุณากรอกส่วนสูง";

        height.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบโรคประจำตัว
    // =========================

    if (disease.value.trim() === "") {

        document.getElementById("diseaseError").textContent =
            "⚠ กรุณากรอกข้อมูลโรคประจำตัว";

        disease.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ตรวจสอบประวัติแพ้ยา
    // =========================

    if (allergy.value.trim() === "") {

        document.getElementById("allergyError").textContent =
            "⚠ กรุณากรอกข้อมูลประวัติแพ้ยา";

        allergy.classList.add("input-error");

        valid = false;
    }


    // =========================
    // ถ้าข้อมูลไม่ครบ
    // =========================

    const result = document.getElementById("save-result");

    if (!valid) {

        result.textContent =
            "กรุณากรอกข้อมูลให้ครบทุกช่อง";

        result.style.color = "#d92d20";

        return;
    }


    // =========================
    // ถ้าข้อมูลครบ
    // =========================

    result.textContent =
        "✓ บันทึกข้อมูลเรียบร้อยแล้ว";

    result.style.color = "#12b76a";


    // =========================
    // ไปหน้าถัดไป
    // =========================

    setTimeout(function() {

        window.location.href = "appointment.html";

    }, 1000);
}