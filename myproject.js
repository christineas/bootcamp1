var dataProject = [];

function addProject(event){
    event.preventDefault();

    let title = document.getElementById("title").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("input-image").files[0];
    let imageURL = URL.createObjectURL(image);

    if(title === ""){
        return alert("Please enter your title!")
    } else if (startdate === ""){
        return alert("Please enter your startdate!")
    } else if (enddate === ""){
        return alert("Please enter your enddate!")
    } else if (content === ""){
        return alert("Please enter your content!")
    } else if (imageURL === ""){
        return alert("Please enter your image!")
    }

    if (startdate > enddate){
        return alert("The end date cannot be less than the start date")
    }

    let startDatePart = startdate.split("/")
    let endDatePart = enddate.split("/")

    let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
    let formatEndDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

    let newStartDate = new Date(startdate)
    let newEndDate = new Date(enddate)

    let timeDifference = newEndDate - newStartDate

    var differenceInYears = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    var differenceInMonths = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    var differenceInDays = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // let differenceInDays = Math.floor(timeDifference / (10006060*24))
    // let differenceInMonths = Math.floor(differenceInDays / 30.44)
    // let differenceInYears = Math.floor(differenceInMonths/12)

    let duration = 0;

    if (differenceInYears > 0) {
        duration += differenceInYears + ' tahun';
        duration += ' ';
      }
  
      if (differenceInMonths > 0) {
        duration += differenceInMonths + ' bulan';
        duration += ' ';
      }
  
      if (differenceInDays > 0) {
        duration += differenceInDays + ' hari';
      }

    //setiap proses yang ada pada Javascript, prosesnya berurutan

    // lett addProject = {
    //     title,
    //     content,
    //     image
    // }

    dataProject.push({
        title: title,
        startdate: startdate,
        enddate: enddate,
        duration: duration,
        content: content,
        image: imageURL
    })

    console.log(dataProject);

    newData()
}

function newData(){
    document.getElementById("list-project").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++){
        const project = dataProject[i]

        document.getElementById("list-project").innerHTML += `
        <div class="card3">
            <img src="${project.image}" style="width: 350px;">
        </div>
            <h3>${project.title}</h3>
            <p>${project.startdate} - ${project.enddate}</p>
            <p>Durasi : ${project.duration}</p>
            <p>${project.content}</p>
            <p>Happy Download</p>
            <div class="flex-container">
                <i class="fab fa-google-play" id="icon"></i>
                <i class="fab fa-android" id="icon"></i>
                <i class="fab fa-java" id="icon" style="font-weight: bold;"></i>
            </div>
        `
    }
}
