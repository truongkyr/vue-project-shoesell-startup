<template>
    <div class="container">
        <div class="row">
            <div class="detail col-lg-6">
                <div class="detail-img">
                    <img src="../assets/img/adidas-sanpham-1.jpg" alt="">
                </div>
            </div>
            <div class="detail col-lg-6">
                <div class="detail-title">
                    <span> ULTRABOOST LIGHT TRIPLE WHITE </span>
                </div>
                <div class="detail-content">
                    <span class="detail-char col-lg-3"> Brands: <a href="#" class="brands-text"> Adidas </a> </span>
                    <span class="detail-char col-lg-3"> Code: <span class="text-blue"> AD1 </span></span>
                    <span class="detail-char col-lg-3"> Views: <span class="text-blue"> 1000 </span></span>
                </div>
                <div class="detail-price">
                    <span class="detail-price-content">
                        1.000.000 đ
                    </span>
                </div>
                <div class="detail-status">
                    <ul>
                        <li> <strong> Trạng thái: </strong> Còn hàng</li>
                        <li> <strong> Tình trạng: </strong>  Mới 100%</li>
                        <li> <strong> Giảm Giá: </strong> ít nhất <strong class="text-red"> 5% </strong>khi mua hàng lần thứ 2</li>
                    </ul>
                </div>
                <div class="size">
                    <div class="title-size">
                        <span> Chọn Size: </span>
                    </div>
                    <div class="size-number">
                        <ul class="size-number-menu">
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                        </ul>
                    </div>
                </div>
                <div class="quantity">
                    <div class="quantity-product">
                        <input class="quantity-inp" type="number" value="1" max="10" min="1">
                        <span class="choose">(Chọn số lượng)</span>
                    </div>
                </div>
                <div class="buy">
                    <input type="submit" class="buy-now" value="Mua ngay">
                    <input type="submit" class="add-cart" value="Thêm vào giỏ">
                </div>
                <div class="link">
                    <span> Facebook: <a href="#" class="link-content"> https://www.facebook.com</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>



<style scoped>
.detail-title{
    text-align: left;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
}
.detail-char {
    display: inline-block;
    position: relative;
}
.detail-price{
    color: rgb(233, 115, 72);
    font-family: sans-serif;
    font-size: 35px;
    margin-bottom: 15px;
    margin-top: 15px;
}
.brands-text{
    text-decoration: none;
    color: #4759eb;
}
.text-red{
    color: rgb(233, 115, 72);
}
.text-blue{
    color: #4759eb;
}
.size-number-menu{
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
}
.size{
    background-color: #dee2e6 !important;
    width: 80%;
    height: 80px;
    border: 2px solid #babfc4;
    margin-bottom: 15px;
}
.title-size{
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 10px;
    font-size: 14px;
}
ul.size-number-menu li{
    color: rgb(92, 92, 92);
    display: flex;
    width: 40px;
    border-style: solid;
    margin: 2px;
    border-width: thin;
    padding: 5px;
    background-color: white;
    justify-content: space-around;
}
ul.size-number-menu li:hover{
    border: 1px solid rgb(233, 115, 72);
}
.quantity-product{
    margin-bottom: 25px;
}
.quantity-inp{
    height: 25px;
    padding-left: 13px;
    padding-right: 0;
    text-align: center;
    width: 60px;
}
.choose{
    margin-left: 15px;
    font-size: 20px;
    color: #7f8081;
    font-style: italic;
}
.buy{
    margin-bottom: 15px;
}
.buy-now{
    border-radius: 6px;
    border: rgb(233, 115, 72);
    height: 50px;
    width: 150px;
    text-align: center;
    background-color: rgb(233, 115, 72);
    color: aliceblue;
}
.add-cart{
    background-color: white;
    color: rgb(233, 115, 72);
    margin-left: 25px;
    border-radius: 6px;
    border: 1px solid rgb(233, 115, 72);
    height: 50px;
    width: 150px;
    text-align: center;
}
.link{
    color: rgb(92, 92, 92);
}
.link-content{
    text-decoration: none;
}
</style>