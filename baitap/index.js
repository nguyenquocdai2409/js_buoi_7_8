var numberArray = [];
function themSo() {
    var number = document.getElementById("number").value * 1;
    // thêm giá trị default nếu user ko nhập input
    if (number == 0) {
        var random = Math.floor(Math.random() * 100);
    }
    numberArray.push(number);
    document.getElementById("resultMang").innerHTML = numberArray;

}
// 1. tổng các số trong mảng
function tinhTong() {
    var tongSoDuong = 0;
    numberArray.forEach(function (item) {

        if (item > 0) {
            tongSoDuong += item;
        }
    });
    document.getElementById("resultTong").innerHTML = `Tổng số dương : ${tongSoDuong}`;
}
// 2. đếm số dương trong mảng
function demSoDuong() {
    var soLuongSoDuong = 0;
    numberArray.forEach(function (item) {
        if (item > 0) {
            soLuongSoDuong++;
        }
    });
    document.getElementById("resultDemSoDuong").innerHTML = `Số lượng số dương : ${soLuongSoDuong}`;
}
// 3. tìm số nhỏ nhất trong mảng
function timSoNhoNhat() {
    var danhSachSoTrongMang = [];
    for (i = 0; i < numberArray.length; i++) {
        var soTrongMang = numberArray[i] * 1;
        danhSachSoTrongMang.push(soTrongMang);
    }
    var soNhoNhatTrongMang = danhSachSoTrongMang[0];
    for (i = 0; i < danhSachSoTrongMang.length; i++) {
        if (danhSachSoTrongMang[i] < soNhoNhatTrongMang) {
            soNhoNhatTrongMang = danhSachSoTrongMang[i];
        }
    }
    document.getElementById("resultSoNhoNhat").innerHTML = `Số nhỏ nhất trong mảng là : ${soNhoNhatTrongMang}`
}
// 4. tìm số dương nhỏ nhất trong mảng 
function timSoDuongNhoNhat() {
    var mangCoChuaSoDuong = [];
    for (i = 0; i < numberArray.length; i++) {
        var soDuongTrongMang = numberArray[i] * 1;
        if (soDuongTrongMang > 0) {
            mangCoChuaSoDuong.push(soDuongTrongMang);

        }
    }
    var soDuongNhoNhatTrongMang = mangCoChuaSoDuong[0];
    for (i = 0; i < mangCoChuaSoDuong.length; i++) {
        if (mangCoChuaSoDuong[i] < soDuongNhoNhatTrongMang) {
            soDuongNhoNhatTrongMang = mangCoChuaSoDuong[i];
        }
    }
    document.getElementById("resultSoDuongNhoNhat").innerHTML = `Số dương nhỏ nhất trong mảng là : ${soDuongNhoNhatTrongMang}`
}

// 5. tìm số chẵn cuối cùng 
function timSoChanCuoiCung() {
    var mangCoChuaSoChan = [];
    for (i = 0; i < numberArray.length; i++) {
        var soChanTrongMang = numberArray[i] * 1;
        if (soChanTrongMang % 2 == 0) {
            mangCoChuaSoChan.push(soChanTrongMang);
        }
    }
    document.getElementById("resultSoChanCuoiCung").innerHTML =
        `Số chẵn cuối cùng trong mảng : ${mangCoChuaSoChan[mangCoChuaSoChan.length - 1]}`
}
// 6. hoán đổi phần tử trong mảng
function doiPhanTuTrongMang() {
    var index1 = document.getElementById("index1").value * 1;
    var index2 = document.getElementById("index2").value * 1;
    const swapElements = (numberArray, index1, index2) => {
        let temp = numberArray[index1];
        numberArray[index1] = numberArray[index2];
        numberArray[index2] = temp;
    };
    swapElements(numberArray, index1, index2);
    document.getElementById("resultKetQuaSauKhiDoi").innerHTML =
        `Mảng sau khi được thay đổi : ${numberArray}`
}

// 7. sắp xếp tăng dần
function sapXepTangDan() {
    var mangTangDan = numberArray;
    numberArray.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("resultSapXepTangDan").innerHTML =
        `Sắp xếp mảng theo thứ tự tăng dần : ${mangTangDan}`
}

// 8. tìm số nguyên tố đầu tiên 

/*Tạo hàm kiểm tra số nguyên tố*/
function isprime(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    let flag = 1;

    if (n < 2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}
/*Tìm  các số nguyên tố trong mảng*/
function soNguyenToDauTien() {
    let mangCoChuaSoNguyenTo = [];
    for (let i = 0; i < numberArray.length; i++) {
        if (isprime(numberArray[i]) == 1) {
            mangCoChuaSoNguyenTo.push(numberArray[i]);
            break;
        }

    }
    document.getElementById("resultSoNguyenToDauTien").innerHTML =
        `Số nguyên tố đầu tiên trong mảng : ${mangCoChuaSoNguyenTo}`
}


// 9. Đếm số nguyên trong mảng

function check_real_leteger_number(n) {
    //flag = 1 => là số nguyên
    //flag = 0 => không phải là số nguyên
    let flag = 1;
    if (Math.ceil(n) != Math.floor(n)) flag = 0;
    return flag;
}
function soNguyenTrongMang() {
    let i = 0;
    let check = 0;
    let dem = 0
    for (i = 0; i < numberArray.length; i++) {
        check = check_real_leteger_number(numberArray[i]);
        if (check == 1) {
            dem++
        }
        console.log(numberArray[i]);
    }
    console.log(dem);

    document.getElementById("resultTongSoNguyenTrongMang").innerHTML = `Số nguyên : ${dem}`
}

// 10. so sánh số âm với số dương 
function soSanhSoAmDuong() {
    var tongSoAm = 0;
    var tongSoDuong = 0;
    numberArray.forEach(function(item){
        if(item > 0){
            tongSoDuong++;
        }
        else{
            tongSoAm++;
        }
    });
    for(i=0; i<numberArray.length; i++) {
        if(tongSoAm>tongSoDuong) {
            console.log("Số âm > Số dương");
            document.getElementById("resultSoSanhSoAmDuong").innerHTML = "Số âm > Số dương";

        }
        else if(tongSoAm==tongSoDuong){
            console.log("Số âm = Số Dương");
            document.getElementById("resultSoSanhSoAmDuong").innerHTML = "Số âm = Số dương";

        }
        else{
            console.log("Số dương > Số âm");
            document.getElementById("resultSoSanhSoAmDuong").innerHTML = "Số dương > Số âm";

        }
    }
    
}