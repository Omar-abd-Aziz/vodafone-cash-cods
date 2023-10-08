







window.onclick = async (e) => {
   
  
    if ([...e.target.classList].includes("cods")) {
       
        if(e.target.dataset.value=="استعلام عن الرصيد"){
            location.href = "tel:*9*13%23";
        } else
        if(e.target.dataset.value=="تحويل فلوس فودافون كاش"){
            Swal.fire({
                html: `
                
                <div style="overflow-y: hidden; overflow-c: scroll; font-size: 17px!important; font-family: 'Cairo', sans-serif; font-weight: bold!important;">

                <label for="PhoneNumber" class="label"> رقم الهاتف </label>
                <input style="width: 98%;" class="addOrderInput" type="text" dir="auto" autocomplete="off" id="PhoneNumber" >
        
                <label for="Price" class="label"> المبلغ </label>
                <input style="width: 98%;" class="addOrderInput" type="number" dir="rtl" autocomplete="off" id="Price">

                </div>
                
                `,
            }).then((e)=>{
                if(e.isConfirmed){
                    let PhoneNumber = document.querySelector("#PhoneNumber").value.trim();
                    let Price = document.querySelector("#Price").value.trim();
                    location.href=`tel:*9*7*${PhoneNumber}*${Price}%23`;
                };
            });
        } else
        if(e.target.dataset.value=="شحن رصيد"){
            location.href = "tel:*9*10%23";
        }else
        if(e.target.dataset.value=="تغيير الرقم السري للمحفظة"){
            location.href = "tel:*9*2%23";
        }else
        if(e.target.dataset.value=="نسيت الرقم السري للمحفظة"){
            location.href = "tel:*9*12%23";
        }else
        if(e.target.dataset.value=="انشاء فيزا شراء اونلاين"){
            location.href = "tel:*9*100%23";
        }else
        if(e.target.dataset.value=="شحن كرت فكة 9 جنية"){
            location.href = "tel:*9*900%23";
        }else
        if(e.target.dataset.value=="شحن كرت فكة 15 جنية"){
            location.href = "tel:*9*150%23";
        }else
        if(e.target.dataset.value=="تاكيد الايداع"){
            location.href = "tel:*900*2%23";
        }


    };



















  };
