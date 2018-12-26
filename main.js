document.getElementById('issueinputform').addEventListener('submit',saveissue);

  function saveissue(e){
    var issuedescr = document.getElementById(issuedescrinput).Value;
    var issueseverity = document.getElementById(severityinput).Value;
    var issueassignedto  = document.getElementById(issueassigntoinput).value;
    var issueid = chance.guid();
    var issuestatus = 'Open';

    var issue = {
        id = issueid,
        description = issuedescr,
        severity = issueseverity,
        assignedto = issueassignedto,
        status = issuestatus
    }

    if (localStorage.getItem('issues') == null){
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }
    else{
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
         }
    document.getElementById('issueinputform').reset();

    fetchissues();

    e.preventDefault();
    }
    


function fetchissues(){
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issueslist = document.getElementById("issueslist");

    issueslist.innerHTML ="";

    for (var i=0;i<issues.length;i++){
        var id = issues[i].id;
        var descr = issues[i].description;
        var severity = issues[i].severity;
        var assignedto = issues[i].assignedto;
        var status = issues[i].status;

        issueslist.innerHTML += '<div class = "well">'+
                                '<h6>Issues ID :'+ id + '</h6>'+
                                '<p><span class = "label label-info"> ' + status + '</span></p>'+
                                '<h3>'+ descr + '</h3>'
                                '<p><span class = "glyphicon glyphicon-time"></span>' + severity + '</p>'+
                                '<p><span class = "glyphicon glyphicon-user"></span>' + assignedto +'</p>'+
                                '<a herf = "#" onclick = "setstatusclosed(\''+id+'\' )" class = "btn btn-warning">Close</a>'+
                                '<a href = "#" onclick = "deleteissues(\''+id+'\')" class = "btn btn-danger">Delete</a>'+
                                '</div>'
    }
}