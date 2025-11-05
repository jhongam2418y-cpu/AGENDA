var ndpp1= parseInt(document.getElementById("ndpp1").value);
var nddp2= parseInt(document.getElementById("nddp2").value);
 
var dc11= parseInt(document.getElementById("dc11").value); 
var dc12= parseInt(document.getElementById("dc12").value); 
var do1= parseInt(document.getElementById("do1").value); 
var dp1= parseInt(document.getElementById("dp1").value);

var dc21= parseInt(document.getElementById("dc21").value); 
var dc22= parseInt(document.getElementById("dc22").value); 
var do2= parseInt(document.getElementById("do2").value); 
var dp2= parseInt(document.getElementById("dp2").value);

var sco11= parseInt(document.getElementById("sco11").value); 
var sco12= parseInt(document.getElementById("sco12").value); 
var soo1= parseInt(document.getElementById("soo1").value); 
var spo1= parseInt(document.getElementById("spo1").value);

var sco21= parseInt(document.getElementById("sco21").value); 
var sco22= parseInt(document.getElementById("sco22").value); 
var soo2= parseInt(document.getElementById("soo2").value); 
var spo2= parseInt(document.getElementById("spo2").value);

var scp11= parseInt(document.getElementById("scp11").value); 
var scp12= parseInt(document.getElementById("scp12").value); 
var sop1= parseInt(document.getElementById("sop1").value); 
var spp1= parseInt(document.getElementById("spp1").value);

var scp21= parseInt(document.getElementById("scp21").value); 
var scp22= parseInt(document.getElementById("scp22").value); 
var sop2= parseInt(document.getElementById("sop2").value); 
var spp2= parseInt(document.getElementById("spp2").value);

var scd11= parseInt(document.getElementById("scd11").value); 
var scd12= parseInt(document.getElementById("scd12").value); 
var sod1= parseInt(document.getElementById("sod1").value); 
var spd1= parseInt(document.getElementById("spd1").value);

var scd21= parseInt(document.getElementById("scd21").value); 
var scd22= parseInt(document.getElementById("scd22").value); 
var sod2= parseInt(document.getElementById("sod2").value); 
var spd2= parseInt(document.getElementById("spd2").value);

var scv11= parseInt(document.getElementById("scv11").value); 
var scv12= parseInt(document.getElementById("scv12").value); 
var sov1= parseInt(document.getElementById("sov1").value); 
var spv1= parseInt(document.getElementById("spv1").value);

var scv21= parseInt(document.getElementById("scv21").value); 
var scv22= parseInt(document.getElementById("scv22").value); 
var sov2= parseInt(document.getElementById("sov2").value); 
var spv2= parseInt(document.getElementById("spv2").value);

var scm11= parseInt(document.getElementById("scm11").value); 
var scm12= parseInt(document.getElementById("scm12").value); 
var som1= parseInt(document.getElementById("som1").value); 
var spm1= parseInt(document.getElementById("spm1").value);

var scm21= parseInt(document.getElementById("scm21").value); 
var scm22= parseInt(document.getElementById("scm22").value); 
var som2= parseInt(document.getElementById("som2").value); 
var spm2= parseInt(document.getElementById("spm2").value);

var cpod1 = (dc11 + dc12 + do1 + dp1) / ndpp1; 
var ceod2 = (dc21 + dc22 + do2 + dp2) / nddp2;

var cpos1= sco11 + sco12 + soo1 + spo1 + scp11 + scp12 + sop1 + spp1 + scd11 + scd12 + sod1 + spd1 + scv11 + scv12 + sov1 + spv1 + scm11 + scm12 + som1 + spm1;
var cpos2= sco21 + sco22 + soo2 + spo2 + scp21 + scp22 + sop2 + spp2 + scd21 + scd22 + sod2 + spd2 + scv21 + scv22 + sov2 + spv2 + scm21 + scm22 + som2 + spm2;
window.addEventListener('load', function() {
    if(isNaN(cpod1)) {
        cpod1 = 0;
    }
    if(isNaN(ceod2)) {
        ceod2 = 0;
    }
    
    document.getElementById("cpod1").value = cpod1;
    document.getElementById("ceod2").value = ceod2;
    document.getElementById("cpos1").value = cpos1;
    document.getElementById("cpos2").value = cpos2;
    document.getElementById("total").value = ndpp1 + nddp2;
});