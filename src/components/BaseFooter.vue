<template>
    <div class="container">
        <div class="row">
            <div class="contact col-lg-3">
                <a href="#"><img class="footer-img" src="../assets/img/logoQualityShoes.png" alt=""></a>
            </div>
            <div class="contact col-lg-3">
                <a href="#" class="content-footer">SẢN PHẨM</a>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Sneaker</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Giày Tây</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Sandal</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Khác</a>
                </div>
            </div>
            <div class="contact col-lg-3">
                <a href="#" class="content-footer">VỀ CHÚNG TÔI</a>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Tuyển dụng</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Chi tiết về chúng tôi</a>
                </div>
            </div>
            <div class="contact col-lg-3">
                <a href="#" class="content-footer">CHÍNH SÁCH HỖ TRỢ</a>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Bảo mật thông tin</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Hỗ trợ khách hàng</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Tra cứu thông tin</a>
                </div>
                <div class="footer-item">
                    <a href="#" class="footer-item-content">Tra cứu đơn hàng</a>
                </div>
            </div>


            <div class="contact col-lg-3"></div>


            <div class="contact col-lg-3">
                <a href="#" class="content-footer">Social</a>
                <div class="footer-item">
                    <a href="#" class="footer-item-content-logo"><i class="fa-brands fa-facebook" style="padding: 10px 10px 10px 0px;"></i></a>

                    <a href="#" class="footer-item-content-logo"><i class="fa-brands fa-instagram" style="padding: 10px; color: #e01f60;"></i></a>

                    <a href="#" class="footer-item-content-logo"><i class="fa-brands fa-twitter" style="padding: 10px;"></i></a>

                    <a href="#" class="footer-item-content-logo"><i class="fa-brands fa-youtube" style="padding: 10px; color: #c5183e;"></i></a>
                    
                </div>
            </div>  
        </div>
        <div class="content-character">
            <span class="content-character-string">Copyright © 2018 by us . All Rights Reserved</span>
        </div>
    </div>
</template>



<script>
export default {
    
}
</script>



<style scoped>
.container{
    background-color: #dee2e6 !important;
    max-width: 100%;
}
.footer-img{
    width: 275px;
}
.content-footer{
    text-decoration: none;
    font-size: 25px;
    color: cadetblue;
    font-weight: bold;
    font-style: italic;
}
.content-footer:hover{
    color: black;
}
.footer-item-content{
    color: #686868;
    text-decoration: none;
}
.footer-item-content:hover{
   color: rgb(233, 115, 72);;
}
.content-character{
    text-align: center;
}
.content-character-string{
    color: #686868;
}
.footer-item-content-logo{
    font-size: 40px;
}
.footer-item{
    padding-bottom: 5px;
}
</style>