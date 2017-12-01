export class NoiTro {
    constructor(id, email: string, matkhau: string, fullname: string,hinhanh:string,
                diachi: string, sodienthoai: string, somon: Number, soluotquantam: Number,role:Boolean,isquantam:Boolean) {
        this.id = id;
        this.email = email;
        this.matkhau = matkhau;
        this.fullname = fullname;
        this.hinhanh = hinhanh;
        this.diachi = diachi;
        this.sodienthoai = sodienthoai;
        this.somon = somon;
        this.soluotquantam = soluotquantam;
        this.role = role;
        this.isquantam = isquantam;
    }
}