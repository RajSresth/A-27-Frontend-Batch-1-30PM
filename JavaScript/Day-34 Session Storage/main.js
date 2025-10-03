const skills=["React","Angular"];

const course={
        courseName:"MERN Stack",
        price:2000
};

sessionStorage.setItem("skills",JSON.stringify(skills));
sessionStorage.setItem("course",JSON.stringify(course));

sessionStorage.clear()