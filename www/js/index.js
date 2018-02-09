Backendless.initApp("A93BFE76-ECC2-76FD-FF8C-3FB305FAC400","DAF76200-4BAA-5758-FFA0-D60D4F883900");

$(document).on("pageshow","#todopage", onPageShow);

function onPageShow() {
	console.log("page shown");
} 

Backendless.Data.of("TASKS").find().then(processResults).catch(error);
function processResults(tasks) {
   //display the first task in an array of tasks. 
alert(tasks[0].Task)
}

function error(err) {
    alert(err);
}
