function myFunction(e) {
  var timestamp = e.values[0];
  var q1 = e.values[1];
  var q1r = e.values[2];
  var q2 = e.values[3];
  var q2r = e.values[4];
  var q3 = e.values[5];
  var q3r = e.values[6];
  var q4a = e.values[7];
  var q4b = e.values[8];
  var q4r = e.values[9];
  var q5 = e.values[10];
  var q6a = e.values[11];
  var q6b = e.values[12];
  var q6r = e.values[13];
  var q7 = e.values[14];
  var q8 = e.values[15];
  var q9 = e.values[16];
  var q10 = e.values[17];
  var q11 = e.values[18];
  var q12 = e.values[19];
  var q13 = e.values[20];
  var q14 = e.values[21];
  var q15 = e.values[22];
  var q16a = e.values[23];
  var q16b = e.values[24];
  var q16r = e.values[25];
  var q17a = e.values[26];
  var q17b = e.values[27];
  var q17r = e.values[28];
  var q18 = e.values[29];
  var q19a = e.values[30];
  var q19b = e.values[31];
  var q19r = e.values[32];
  
  var file = DriveApp.getFileById('12MUBLlafaMISCdUIwwMdsZyQ_iamK6AmjfW2droX10k');   //'sample doc' id
  
  var folder = DriveApp.getFolderById('1b2seej1Now7_5Z3yM-fQg021kIBx_Jai')    // destination folder id
  var copy = file.makeCopy('Response', folder); 
  
  var doc = DocumentApp.openById(copy.getId()); 
  
  var body = doc.getBody(); 
  
  body.replaceText('{{Q1}}', q1);
  body.replaceText('{{Q1r}}', q1r); 
  body.replaceText('{{Q2}}', q2); 
  body.replaceText('{{Q2r}}', q2r); 
  body.replaceText('{{Q3}}', q3); 
  body.replaceText('{{Q3r}}', q3r); 
  body.replaceText('{{Q4a}}', q4a);
  body.replaceText('{{Q4b}}', q4b);
  body.replaceText('{{Q4r}}', q4r); 
  body.replaceText('{{Q5}}', q5); 
  body.replaceText('{{Q6a}}', q6a); 
  body.replaceText('{{Q6b}}', q6b); 
  body.replaceText('{{Q6r}}', q6r); 
  body.replaceText('{{Q7}}', q7); 
  body.replaceText('{{Q8}}', q8); 
  body.replaceText('{{Q9}}', q9); 
  body.replaceText('{{Q10}}', q10); 
  body.replaceText('{{Q11}}', q11);
  body.replaceText('{{Q12}}', q12); 
  body.replaceText('{{Q13}}', q13); 
  body.replaceText('{{Q14}}', q14); 
  body.replaceText('{{Q15}}', q15); 
  body.replaceText('{{Q16a}}', q16a);
  body.replaceText('{{Q16b}}', q16b); 
  body.replaceText('{{Q16r}}', q16r); 
  body.replaceText('{{Q17a}}', q17a);
  body.replaceText('{{Q17b}}', q17b); 
  body.replaceText('{{Q17r}}', q17r); 
  body.replaceText('{{Q18}}', q18); 
  body.replaceText('{{Q19a}}', q19a); 
  body.replaceText('{{Q19b}}', q19b);
  body.replaceText('{{Q19r}}', q19r); 
  
  doc.saveAndClose(); 
}
