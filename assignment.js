function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("random-color").addEventListener("click", function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

// Discove Button
document.addEventListener("DOMContentLoaded", function () {
    const discoverButton = document.getElementById("discover-btn");
    if (discoverButton) {
        discoverButton.addEventListener("click", function () {
            window.location.href = "./discover.html";
        });
    }
    const backButton = document.getElementById("back-btn");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "./index.html";
        });
    }
});
// Clear History
document.addEventListener("DOMContentLoaded", function () {
    const clearHistoryButton = document.getElementById("clear-btn");
    const activityLogContainer = document.getElementById("activity-log");

    if (clearHistoryButton && activityLogContainer) {
        clearHistoryButton.addEventListener("click", function () {
            activityLogContainer.innerHTML = "";
        });
    }
});

// Current Date
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("current-date");
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const now = new Date();
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();

    // Format: Wednesday, March 5, 2025
    const formattedDate = `${dayName}, ${month} ${date}, ${year}`;

    // Insert into HTML
    dateElement.textContent = formattedDate;
});

// Button-1
const completeButton1 = document.getElementById("btn-1");
completeButton1.addEventListener("click", function () {
    alert("Board Updated Successfully")

    let taskAssigned = document.getElementById("task-assigned");
    let taskAssignedValue = parseInt(taskAssigned.innerText);
    let taskAssignedValueMinus = taskAssignedValue - 1;
    taskAssigned.innerText = taskAssignedValueMinus;

    let navBar = document.getElementById("nav-bar");
    let navBarValue = parseInt(navBar.innerText);
    let navBarValuePlus = navBarValue + 1;
    navBar.innerText = navBarValuePlus;

    completeButton1.style.opacity ="0.3";
    completeButton1.style.backgroundColor = "bg-indigo-600";
    completeButton1.style.pointerEvents = "none";
    if (navBarValuePlus > 28) {
        alert("Congrats!!! You have completed all the current task")
    }

    let now = new Date();
    let time = now.toLocaleString("en-GB", {
        Hour: "2 digit",
        Minute: "2 digit",
        Second: "2 digit",
        hour12: true
    });
    let taskCard = document.getElementById("task-1");
    let taskName = taskCard.innerText;
    let activityLog = document.getElementById("activity-log");
    let newPragraph = document.createElement("p");
    newPragraph.classList.add(
        'p-3',
        'bg-[#F4F7FF]',
        'rounded-lg',
        'shadow-sm',
        'text-gray-600',
        'font-normal',
        'm-2'
    );
    newPragraph.innerText = `You have completed the task ${taskName} at ${time}`;
    activityLog.appendChild(newPragraph)   
})
// Button-2
const completeButton2 = document.getElementById("btn-2");
completeButton2.addEventListener("click", function () {
    alert("Board Updated Successfully")

    let taskAssigned = document.getElementById("task-assigned");
    let taskAssignedValue = parseInt(taskAssigned.innerText);
    let taskAssignedValueMinus = taskAssignedValue - 1;
    taskAssigned.innerText = taskAssignedValueMinus;

    let navBar = document.getElementById("nav-bar");
    let navBarValue = parseInt(navBar.innerText);
    let navBarValuePlus = navBarValue + 1;
    navBar.innerText = navBarValuePlus;

    completeButton2.style.opacity ="0.3";
    completeButton2.style.backgroundColor = "bg-indigo-600";
    completeButton2.style.pointerEvents = "none";
    if (navBarValuePlus > 28) {
        alert("Congrats!!! You have completed all the current task")
    }

    let now = new Date();
    let time = now.toLocaleString("en-GB", {
        Hour: "2 digit",
        Minute: "2 digit",
        Second: "2 digit",
        hour12: true
    });
    let taskCard = document.getElementById("task-2");
    let taskName = taskCard.innerText;
    let activityLog = document.getElementById("activity-log");
    let newPragraph = document.createElement("p");
    newPragraph.classList.add(
        'p-5',
        'bg-[#F4F7FF]',
        'rounded-lg',
        'shadow-sm',
        'text-gray-600',
        'font-normal',
        'm-2'
    );
    newPragraph.innerText = `You have completed the task ${taskName} at ${time}`;
    activityLog.appendChild(newPragraph)   
})
// Button-3
const completeButton3 = document.getElementById("btn-3");
completeButton3.addEventListener("click", function () {
    alert("Board Updated Successfully")

    let taskAssigned = document.getElementById("task-assigned");
    let taskAssignedValue = parseInt(taskAssigned.innerText);
    let taskAssignedValueMinus = taskAssignedValue - 1;
    taskAssigned.innerText = taskAssignedValueMinus;

    let navBar = document.getElementById("nav-bar");
    let navBarValue = parseInt(navBar.innerText);
    let navBarValuePlus = navBarValue + 1;
    navBar.innerText = navBarValuePlus;

    completeButton3.style.opacity ="0.3";
    completeButton3.style.backgroundColor = "bg-indigo-600";
    completeButton3.style.pointerEvents = "none";
    if (navBarValuePlus > 28) {
        alert("Congrats!!! You have completed all the current task")
    }

    let now = new Date();
    let time = now.toLocaleString("en-GB", {
        Hour: "2 digit",
        Minute: "2 digit",
        Second: "2 digit",
        hour12: true
    });
    let taskCard = document.getElementById("task-3");
    let taskName = taskCard.innerText;
    let activityLog = document.getElementById("activity-log");
    let newPragraph = document.createElement("p");
    newPragraph.classList.add(
        'p-5',
        'bg-[#F4F7FF]',
        'rounded-lg',
        'shadow-sm',
        'text-gray-600',
        'font-normal',
        'm-2'
    );
    newPragraph.innerText = `You have completed the task ${taskName} at ${time}`;
    activityLog.appendChild(newPragraph)   
})
// Button-4
const completeButton4 = document.getElementById("btn-4");
completeButton4.addEventListener("click", function () {
    alert("Board Updated Successfully")

    let taskAssigned = document.getElementById("task-assigned");
    let taskAssignedValue = parseInt(taskAssigned.innerText);
    let taskAssignedValueMinus = taskAssignedValue - 1;
    taskAssigned.innerText = taskAssignedValueMinus;

    let navBar = document.getElementById("nav-bar");
    let navBarValue = parseInt(navBar.innerText);
    let navBarValuePlus = navBarValue + 1;
    navBar.innerText = navBarValuePlus;

    completeButton4.style.opacity ="0.3";
    completeButton4.style.backgroundColor = "bg-indigo-600";
    completeButton4.style.pointerEvents = "none";
    if (navBarValuePlus > 28) {
        alert("Congrats!!! You have completed all the current task")
    }

    let now = new Date();
    let time = now.toLocaleString("en-GB", {
        Hour: "2 digit",
        Minute: "2 digit",
        Second: "2 digit",
        hour12: true
    });
    let taskCard = document.getElementById("task-4");
    let taskName = taskCard.innerText;
    let activityLog = document.getElementById("activity-log");
    let newPragraph = document.createElement("p");
    newPragraph.classList.add(
        'p-5',
        'bg-[#F4F7FF]',
        'rounded-lg',
        'shadow-sm',
        'text-gray-600',
        'font-normal',
        'm-2'
    );
    newPragraph.innerText = `You have completed the task ${taskName} at ${time}`;
    activityLog.appendChild(newPragraph)   
})
// Button-5
const completeButton5 = document.getElementById("btn-5");
completeButton5.addEventListener("click", function () {
    alert("Board Updated Successfully")

    let taskAssigned = document.getElementById("task-assigned");
    let taskAssignedValue = parseInt(taskAssigned.innerText);
    let taskAssignedValueMinus = taskAssignedValue - 1;
    taskAssigned.innerText = taskAssignedValueMinus;

    let navBar = document.getElementById("nav-bar");
    let navBarValue = parseInt(navBar.innerText);
    let navBarValuePlus = navBarValue + 1;
    navBar.innerText = navBarValuePlus;

    completeButton5.style.opacity ="0.3";
    completeButton5.style.backgroundColor = "bg-indigo-600";
    completeButton5.style.pointerEvents = "none";
    if (navBarValuePlus > 28) {
        alert("Congrats!!! You have completed all the current task")
    }

    let now = new Date();
    let time = now.toLocaleString("en-GB", {
        Hour: "2 digit",
        Minute: "2 digit",
        Second: "2 digit",
        hour12: true
    });
    let taskCard = document.getElementById("task-5");
    let taskName = taskCard.innerText;
    let activityLog = document.getElementById("activity-log");
    let newPragraph = document.createElement("p");
    newPragraph.classList.add(
        'p-5',
        'bg-[#F4F7FF]',
        'rounded-lg',
        'shadow-sm',
        'text-gray-600',
        'font-normal',
        'm-2'
    );
    newPragraph.innerText = `You have completed the task ${taskName} at ${time}`;
    activityLog.appendChild(newPragraph)   
})
// Button-6
const completeButton6 = document.getElementById("btn-6");
completeButton6.addEventListener("click", function () {
    alert("Board Updated Successfully")

    let taskAssigned = document.getElementById("task-assigned");
    let taskAssignedValue = parseInt(taskAssigned.innerText);
    let taskAssignedValueMinus = taskAssignedValue - 1;
    taskAssigned.innerText = taskAssignedValueMinus;

    let navBar = document.getElementById("nav-bar");
    let navBarValue = parseInt(navBar.innerText);
    let navBarValuePlus = navBarValue + 1;
    navBar.innerText = navBarValuePlus;

    completeButton6.style.opacity ="0.3";
    completeButton6.style.backgroundColor = "bg-indigo-600";
    completeButton6.style.pointerEvents = "none";
    if (navBarValuePlus > 28) {
        alert("Congrats!!! You have completed all the current task")
    }

    let now = new Date();
    let time = now.toLocaleString("en-GB", {
        Hour: "2 digit",
        Minute: "2 digit",
        Second: "2 digit",
        hour12: true
    });
    let taskCard = document.getElementById("task-6");
    let taskName = taskCard.innerText;
    let activityLog = document.getElementById("activity-log");
    let newPragraph = document.createElement("p");
    newPragraph.classList.add(
        'p-5',
        'bg-[#F4F7FF]',
        'rounded-lg',
        'shadow-sm',
        'text-gray-600',
        'font-normal',
        'm-2'
    );
    newPragraph.innerText = `You have completed the task ${taskName} at ${time}`;
    activityLog.appendChild(newPragraph)   
})