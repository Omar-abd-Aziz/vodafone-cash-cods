







window.onclick = async (e) => {
   
  
    if ([...e.target.classList].includes("cods")) {
       
        if(e.target.dataset.value=="استعلام عن الرصيد"){
            document.location.href = "tel:*9*13#";
            console.log(e.target.dataset.value);
        };


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
                    location.href=`tel:*9*7*${PhoneNumber}*${Price}##`;
                    console.log(`tel:*9*7*${PhoneNumber}*${Price}##`)
                };
            });
        };


    };



















  };
