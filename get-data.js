
var med_list = document.getElementById('med_list');

// Create a FHIR client (server URL, patient id in `demo`)
var smart = FHIR.client(demo);
var smart_patient = FHIR.client(demo_patient);

smart_patient.api.search({type: 'Observation', code: { text: 'heart_rate' }}).then(function (results){
  console.log(results);
  var data = [];
  results.data.entry.forEach(function(element){
    var row = [];
    if('code' in element.resource){
      row.push(element.resource.code.text);
    } else {
     row.push('');
    }
    if('category' in element.resource){
      row.push(element.resource.category.text);
    } else {
      row.push('');
    }
    if('effectiveDateTime' in element.resource){
      row.push(element.resource.effectiveDateTime);
    } else {
     row.push('');
    }
    if('status' in element.resource){
      row.push(element.resource.status);
    } else {
     row.push('');
    }
    if('valueQuantity' in element.resource){
      row.push(element.resource.valueQuantity.code);
      row.push(element.resource.valueQuantity.value);
    } else {
     row.push('');
    }
    data.push(row);
  });
  console.log(data);
    $('#data_table').DataTable({
      data: data,
      columns: [
          { title: "Code" },
          { title: "Category" },
          { title: "Time" },
          { title: "Status" },
          { title: "Units" },
          { title: "Value" }
      ]
    });
});

function getBloodAndStuff() {



}

function test() {
    console.log("I've been called!");
    var SAS = 0;
    var est_blood_loss = parseInt(document.getElementById("est_blood_loss").value);
    var lmap = parseInt(document.getElementById("lmap").value);
    var lhr = parseInt(document.getElementById("lhr").value);

    if (est_blood_loss <= 100){
      SAS += 3
    }
    if (est_blood_loss > 100 && est_blood_loss <= 600){
      SAS += 2
    }
    if (est_blood_loss > 600 && est_blood_loss <= 1000){
      SAS += 1
    }
    if (est_blood_loss > 1000){
      SAS += 0
    }
    if (lmap >= 70){
      SAS += 3
    }
    if (lmap >= 55 && lmap <= 69){
      SAS += 2
    }
    if (lmap >= 40 && lmap <= 54){
      SAS += 1
    }
    if (lmap < 40){
      SAS += 0
    }
    if (lhr <= 55){
      SAS += 4
    }
    if (lhr >= 56 && lhr <= 65){
      SAS += 3
    }
    if (lhr >= 66 && lhr <= 75){
      SAS += 2
    }
    if (lhr >= 76 && lhr <= 85){
      SAS += 1
    }
    if (lhr > 85){
      SAS += 0
    }
    console.log("SAS = " + SAS);
    getBloodAndStuff();

}

document.getElementById("submit").addEventListener("click", test);