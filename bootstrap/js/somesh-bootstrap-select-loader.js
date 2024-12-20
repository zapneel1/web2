
/* global define */

/* ================================================
 * Make use of Select list loader.
 *
 * For Bootstrap 3.
 *
 * someshkrghosh@gmail.com
 *
 * https://erp.iitkgp.ernet.in
 *
 * Licensed under The IIT ERP License.
 * ================================================ */

           /*$(function(){
                var data =[{"val":"00001","desc":"[00001]LINGAM SURESH(LB)"},{"val":"00002","desc":"[00002]PALLAB BANDYOPADHYAY(MS)"},{"val":"00003","desc":"[00003]BHARATI SINGH(BC)"},{"val":"00004","desc":"[00004]JYOTI KUMAR KESHAR(EM)"},{"val":"00005","desc":"[00005]PANKAJ SHATADAL(AG)"},{"val":"00006","desc":"[00006]KALI NATH BASAK(TC)"},{"val":"00007","desc":"[00007]AMIT ROY(TU)"},{"val":"00008","desc":"[00008]SARBESWAR NAYAK(AC)"},{"val":"00009","desc":"[00009]RAJARSHI BANERJEE(SR)"},{"val":"00010","desc":"[00010]SANDIP KUMAR CHATTERJEE(BT)"},{"val":"00011","desc":"[00011]SASTHI CHAKRABORTY(EM)"},{"val":"00012","desc":"[00012]KUMAR BARDHAN(SR)"},{"val":"00013","desc":"[00013]MRINAL DASMAHAPATRA(BC)"},{"val":"00014","desc":"[00014]SK NASIR ALI(CO)"},{"val":"00015","desc":"[00015]MADHUSUDAN BANIK(EM)"},{"val":"00016","desc":"[00016]AMAL SARBAJNA(RT)"},{"val":"00017","desc":"[00017]SUBIR BHATTACHARYYA(MT)"},{"val":"00018","desc":"[00018]DILIP KUMAR BISHAL(CW)"},{"val":"00019","desc":"[00019]KANCHAN PATTANAYAK(BC)"},{"val":"00020","desc":"[00020]GAUTAM KUMAR PAL(CY)"},{"val":"00021","desc":"[00021]BISHWAJIT CHATTERJEE(CY)"},{"val":"00022","desc":"[00022]TEMBA SHANKAR RAO(WW)"},{"val":"00023","desc":"[00023]DEBASISH SEAL(HC)"},{"val":"00024","desc":"[00024]S BHANUMURTHY(EM)"},{"val":"00025","desc":"[00025]ASIT KUMAR KULSI(EM)"},{"val":"00026","desc":"[00026]ANGSHUMAN MONDAL(AC)"},{"val":"00027","desc":"[00027]K CHANDRASEKHAR(ST)"},{"val":"00028","desc":"[00028]BATU DOLAI(MA)"},{"val":"00029","desc":"[00029]M BHASKAR(TU)"},{"val":"00030","desc":"[00030]MANIKA MITRA(PH)"},{"val":"00031","desc":"[00031]ARUN SINGHA(EH)"},{"val":"00032","desc":"[00032]RAKESH HATI(BC)"},{"val":"00033","desc":"[00033]SARBAN KUMAR JHA(SY)"},{"val":"00034","desc":"[00034]ANJALI PAL(CE)"},{"val":"00035","desc":"[00035]DEVSHRI ROY(CC)"},{"val":"00036","desc":"[00036]SITAL SARKAR(EM)"},{"val":"00037","desc":"[00037]SUNIL SARKAR(EV)"},{"val":"00038","desc":"[00038]SUCHARITA SEN (BANERJEE)(PT)"},{"val":"00039","desc":"[00039]ALOK GHOSH(RU)"},{"val":"00040","desc":"[00040]UDESHYA KUMAR DAS(SY)"},{"val":"00041","desc":"[00041]ANIL KUMAR YADAV(EM)"},{"val":"00042","desc":"[00042]SAMAR BISWAS(SY)"},{"val":"00043","desc":"[00043]AMITA (PATHAK) MAHANTY(CY)"},{"val":"00044","desc":"[00044]JULIOUS TOON(SY)"},{"val":"00045","desc":"[00045]DIBYENDU GANGOPADHYAY(PH)"},{"val":"00046","desc":"[00046]NARESH CHANDRA MAHTO(LB)"},{"val":"00047","desc":"[00047]RAM PYARE SHARMA(CY)"},{"val":"00048","desc":"[00048]DASHRATH(SY)"},{"val":"00049","desc":"[00049]KRISHNA PRASAD(EC)"},{"val":"00050","desc":"[00050]SUBRATA GHOSH(EP)"},{"val":"00051","desc":"[00051]BIDYUT SAMANTA(CF)"},{"val":"00052","desc":"[00052]ASIS KUMAR DAS(TP)"},{"val":"00053","desc":"[00053]SEKHAR CHAUDHURI(BM)"},{"val":"00054","desc":"[00054]TARUN KR GHUKU(CE)"},{"val":"00055","desc":"[00055]SUBHADRA GARAI(CY)"},{"val":"00056","desc":"[00056]SUBRAT KUMAR BARIK(PH)"},{"val":"00057","desc":"[00057]RAJA MITRA(EE)"},{"val":"00058","desc":"[00058]SUNIL KUMAR BISWAS(SY)"},{"val":"00059","desc":"[00059]SHYAMU HEMBRAM(MT)"},{"val":"00060","desc":"[00060]UTPAL KUMAR DEBNATH(CN)"},{"val":"00061","desc":"[00061]K JAWAHAR(PH)"},{"val":"00062","desc":"[00062]ARIF N MERCHANT(AR)"},{"val":"00063","desc":"[00063]SAMIR KUMAR DAS(PH)"},{"val":"00064","desc":"[00064]TAPAS KUMAR DAS(AC)"},{"val":"00065","desc":"[00065]MURUGANANTHAM N(EH)"},{"val":"00066","desc":"[00066]TARUN KUMAR MUKHERJEE(EV)"},{"val":"00067","desc":"[00067]NIRUPAM CHAKRABORTI(MT)"},{"val":"00068","desc":"[00068]PRATAP CHANDRA DAS(EP)"},{"val":"00069","desc":"[00069]JADAB KUMAR PAL(BM)"},{"val":"00070","desc":"[00070]ASHOK MAKUR(ME)"},{"val":"00071","desc":"[00071]UJJAL KUMAR DAS(NA)"},{"val":"00072","desc":"[00072]RAJU SINGH(GG)"},{"val":"00073","desc":"[00073]DINKAR PRASAD(EE)"},{"val":"00074","desc":"[00074]SAUMEN HAJRA(CY)"},{"val":"00075","desc":"[00075]RAMEN KARMAKAR(GH)"},{"val":"00076","desc":"[00076]SUNIL KUMAR MAJI(SY)"},{"val":"00077","desc":"[00077]ELDHO T I(CE)"},{"val":"00078","desc":"[00078]PROBIR SAHA(SY)"},{"val":"00079","desc":"[00079]AJOY KUMAR DAS(EP)"},{"val":"00080","desc":"[00080]SAINUL ABIDEEN P(LB)"},{"val":"00081","desc":"[00081]SANDEEP CHATTERJEE(UG)"},{"val":"00082","desc":"[00082]JYOTSNA DUTTA MAJUMDAR(MT)"},{"val":"00083","desc":"[00083]NIRUPAMA MALLICK(AG)"},{"val":"00084","desc":"[00084]TARUN KANTI BHATTACHARYYA(EC)"},{"val":"00085","desc":"[00085]DEBABRATA DAS(GS)"},{"val":"00086","desc":"[00086]RIMI BARNALI CHATTERJEE(HS)"},{"val":"00087","desc":"[00087]NARAYAN CHANDRA NAYAK(HS)"},{"val":"00088","desc":"[00088]SUSHIL KUMAR CHOUBEY(SY)"},{"val":"00089","desc":"[00089]SANTANU KUMAR BHOWMIK(GG)"},{"val":"00090","desc":"[00090]PRASANTA KUMAR DATTA(PH)"},{"val":"00091","desc":"[00091]TRILOCHAN SAHOO(NA)"},{"val":"00092","desc":"[00092]SUGATA PRATIK KHASTGIR(PH)"},{"val":"00093","desc":"[00093]SATI NATH BHATTACHARYYA(ME)"},{"val":"00094","desc":"[00094]ADINPUNYA MITRA(AG)"},{"val":"00095","desc":"[00095]ASOK KUMAR NANDA(MA)"},{"val":"00096","desc":"[00096]KHANINDRA PATHAK(MI)"},{"val":"00097","desc":"[00097]SHIV BRAT SINGH(MT)"},{"val":"00098","desc":"[00098]MANAS CHANDRA RAY(ME)"},{"val":"00099","desc":"[00099]MADDALI RAMGOPAL(ME)"},{"val":"00100","desc":"[00100]SANDIPAN GHOSH MOULIC(ME)"},{"val":"00101","desc":"[00101]G P RAJA SEKHAR(MA)"},{"val":"00102","desc":"[00102]SUDIP KUMAR GHOSH(BT)"},{"val":"00103","desc":"[00103]PANKAJ GUPTA(TC)"},{"val":"00104","desc":"[00104]PRABINA RAJIB(BM)"},{"val":"00105","desc":"[00105]RAJEEV KUMAR(CS)"},{"val":"00106","desc":"[00106]RABINDRANATH MAITI(CF)"},{"val":"0012401","desc":"[0012401]MS.SOMALI DATTA(AG)"},{"val":"0012501","desc":"[0012501]MS. V. ANGUSELVI(AG)"},{"val":"0013501","desc":"[0013501]SRI SOMEN CHAKRABORTY(AR)"},{"val":"0015702","desc":"[0015702]SRI ANINDYA HAZRA(CY)"},{"val":"0016902","desc":"[0016902]SRI UDAY KUMAR(CE)"},{"val":"0019502","desc":"[0019502]SRI SARBAJIT PAL(EC)"},{"val":"0029502","desc":"[0029502]SRI N KUMAR(NA)"},{"val":"0029701","desc":"[0029701]SRI RAJIV SHARMA(NA)"},{"val":"0030701","desc":"[0030701]MS. MONALI SARKAR(PH)"},{"val":"0052401","desc":"[0052401]SRI ASHUTOSH SARKAR(IM)"},{"val":"00AG9501","desc":"[00AG9501]SRI KAMAL NAYAN AGRAWAL(AG)"},{"val":"00AR9401","desc":"[00AR9401]MS. SANHITA MALLICK(AR)"},{"val":"00AR9402","desc":"[00AR9402]SRI P.S. HARIMOHAN PILLAI(AR)"},{"val":"00AR9601","desc":"[00AR9601]MS. SUSMITA SEN(AR)"},{"val":"00BM9601","desc":"[00BM9601]SRI SUMAN LAHIRI(BM)"},{"val":"00CE9401","desc":"[00CE9401]SRI MALAY KANTI GHOSH(CE)"},{"val":"00CE9702","desc":"[00CE9702]SRI PRADEEP KUMAR SAHOO(CE)"},{"val":"00CS3005","desc":"[00CS3005]RAVI HANDA(CS)"},{"val":"00EC9701","desc":"[00EC9701]SRI KURUKUNDU RAMA NAIDU(EC)"},{"val":"00EE9402","desc":"[00EE9402]SRI PRADYUMNA KUMAR KAR(EE)"},{"val":"00EE9701","desc":"[00EE9701]SRI BANI KANTA TALUKDAR(EE)"},{"val":"00EE9702","desc":"[00EE9702]SRI ENUMULA VENKATA NARAYANA(EE)"},{"val":"00GG9501","desc":"[00GG9501]SRI SRINIVASA KUMAR TUMMALA(GG)"},{"val":"00GG9701","desc":"[00GG9701]SRI DEBASISH BAGCHI(GG)"},{"val":"00HS9402","desc":"[00HS9402]MS. RHEETU BOSE(HS)"},{"val":"00HS9403","desc":"[00HS9403]MS. D. BABY MOSES(HS)"},{"val":"00HS9404","desc":"[00HS9404]MS. IPSITA DAS(HS)"},{"val":"00HS9501","desc":"[00HS9501]SRI AKHILESH CHANDRA PANDEY(HS)"},{"val":"00MA9406","desc":"[00MA9406]SRI RABIN JANA(MA)"},{"val":"00MA9407","desc":"[00MA9407]SRI DEEPANKAR DAS(MA)"},{"val":"00MA9608","desc":"[00MA9608]SRI GOUR CHANDRA MAHATA(MA)"},{"val":"00ME9401","desc":"[00ME9401]SRI SANJAY KUMAR(ME)"},{"val":"00MS9603","desc":"[00MS9603]MS. DIPTI RANI BISWAL(MS)"},{"val":"00PH9401","desc":"[00PH9401]SRI RAJAL MAHAPATRA(PH)"},{"val":"00PH9402","desc":"[00PH9402]SRI AGAM PRAKASH VAJPEYI(PH)"},{"val":"01001","desc":"[01001]CHACKO JACOB(MS)"},{"val":"01002","desc":"[01002]PRANABENDU GANGOPADHYAY(AT)"},{"val":"01003","desc":"[01003]GARGI DAS(CH)"},{"val":"01004","desc":"[01004]DEBASIS DEB(MI)"},{"val":"01005","desc":"[01005]BIBHASH RANJAN NATH(BC)"},{"val":"01006","desc":"[01006]DEVENDRA KUMAR MAURYA(AT)"},{"val":"01007","desc":"[01007]AMAR KRISHNA SADHUKHAN(SY)"},{"val":"01008","desc":"[01008]RATTI PARAMESWAR ACHARYA(TC)"},{"val":"01009","desc":"[01009]SRIKANTA NAYAK(EM)"},{"val":"01010","desc":"[01010]KAMU SOREN(EM)"},{"val":"01011","desc":"[01011]SNEHALATA MAHATA(CL)"},{"val":"01012","desc":"[01012]GOPAL RANA(CW)"},{"val":"01013","desc":"[01013]BHARGAB MAITRA(CE)"},{"val":"01014","desc":"[01014]TANMAYA PATHAK(CY)"},{"val":"01015","desc":"[01015]BISWATOSH SAHA(BM)"},{"val":"01016","desc":"[01016]SANJOY BANDYOPADHYAY(CY)"},{"val":"01017","desc":"[01017]TAPAN KUMAR NATH(PH)"},{"val":"01018","desc":"[01018]PRACHI TIWARI(CC)"},{"val":"01019","desc":"[01019]GURUPATI MAYA(MM)"},{"val":"01020","desc":"[01020]RAMESH SINGH(BC)"},{"val":"01021","desc":"[01021]SHYAMAPRASAD BANDYOPADHYAY(CC)"},{"val":"01022","desc":"[01022]KABITA DE(BC)"},{"val":"01023","desc":"[01023]PRAMOD KUMAR SINGH(CC)"},{"val":"01024","desc":"[01024]SUNDI RABI(TC)"},{"val":"01025","desc":"[01025]BISWAKESAN SAHOO(EM)"},{"val":"01026","desc":"[01026]TANWIR ASHRAF(AS)"},{"val":"01027","desc":"[01027]SHYAMAL KUMAR BISWAS(WW)"},{"val":"01AE9402","desc":"[01AE9402]SRI ARNAB ROY(AE)"},{"val":"01AE9701","desc":"[01AE9701]SRI SANTANU MITRA(AE)"},{"val":"01AG9401","desc":"[01AG9401]SRI SOHAN LAL BIRLA(AG)"},{"val":"01AG9501","desc":"[01AG9501]PRADYUMAN KUMAR(AG)"},{"val":"01AG9503","desc":"[01AG9503]SRI KALE SUKHEDEO RADHAKISAN(AG)"},{"val":"01AG9504","desc":"[01AG9504]SRI CHANDRA VIR SINGH(AG)"},{"val":"01AG9505","desc":"[01AG9505]SRI E. KATHAVARAYAN(AG)"},{"val":"01AG9602","desc":"[01AG9602]SRI GURJIT SINGH(AG)"},{"val":"01AG9701","desc":"[01AG9701]SRI RAJAN AILAVADI(AG)"},{"val":"01AG9702","desc":"[01AG9702]SRI MANUJ KUMAR HAZARIKA(AG)"},{"val":"01AR9501","desc":"[01AR9501]SRI SAIKAT KUMAR PAUL(AR)"},{"val":"01BT9601","desc":"[01BT9601]SRI NANDAN GUPTA(BT)"},{"val":"01BT9702","desc":"[01BT9702]MR. SUBHRA MISHRA(BT)"}];
                $.each(data, function(i,obj){
                      $('#x').append(
                        $('<option></option>')
                          .val(obj.val)
                          .html(obj.desc));
                });
            });
            */
            /**/
            function loadlist(selobj,url,selval){
                $('#x').empty();
                   var request = $.ajax({
                    url: url,
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    async: false,
                    success: function(data)
                    {
                        //alert(JSON.stringify(data));
                        $(selobj).append($('<option></option>').val('').html('Please Select ...'));
                        $.each(data, function(i,obj){
                            $(selobj).append(
                              $('<option></option>')
                                .val(obj.val)
                                .html(obj.desc));
                        });
                        $(selobj).val(selval);
                    }
                });
            }
            /* HOW TO USE  */
            //$( function(){loadlist('#x',/* x is the id of 'select' object*/
            //           'stakeholderDetails.htm',/*the url of the server-side script for json*/
            //           'T03303'/*The value to be selected by default*/
            //)
            //});