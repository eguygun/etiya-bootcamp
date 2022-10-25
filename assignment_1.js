class courses{
    constructor(courseId,courseInstructor,courseName){
        this.courseId = courseId;
        this.courseInstructor = courseInstructor;
        this.courseName = courseName;
    }
}
class instructors{
    constructor(instructorName,instructorEmail){ 
        this.instructorName = instructorName;
        this.instructorEmail = instructorEmail;
    }

}

class users{
    constructor(username,userMail){
        this.username = username;
        this.userMail = userMail;

    }
}

class enterCourse{
    constructor(){
        this.course = [];
    }

    addCourse(co){
        this.course.push(co);
        console.log("Kurs eklendi.", co);
    }
    
    getCourse(courseIds){
        console.log("Kurs bulundu.",this.course.filter(p => p.courseId === courseIds));
    }
    getCourseInstructor(courseInstructors){
        console.log("İstenilen eğitimcinin kursları bulundu.",this.course.filter(a => a.courseInstructor.includes(courseInstructors)));
    }

    deleteCourse(deletecourse){
        let index = this.course.findIndex(c => c.courseName === deletecourse);
        if (index > -1) {
        this.course.splice(index, 1);
        console.log("Kurs kaldırıldı.", this.course);
        }
    }   
}

class instructorLogin{
    constructor(){
        this.instructor = [];
    }

    addInstructor(ins){
        this.instructor.push(ins);
        console.log("Eğitimci eklendi.", ins);
    }
    
    getInstructor(instructorNames){
        console.log("Eğitimci bulundu.",this.instructor.filter(p => p.instructorName.includes(instructorNames)));
    }

    deleteInstructor(deleteinstructor){
        let index = this.instructor.findIndex(c => c.instructorName === deleteinstructor);
        if (index > -1) {
        this.instructor.splice(index, 1);
        console.log("Eğitimci kaldırıldı.", this.instructor);
        }
    }   
}

class userLogin{
    constructor(){
        this.user = [];
    }

    addUser(us){
        this.user.push(us);
        console.log("Kullanıcı eklendi.", us);
    }
    
    getUser(userNames){
        console.log("Kullanıcı bulundu.",this.user.filter(p => p.username.includes(userNames)));
    }

    deleteUser(deleteuser){
        let index = this.user.findIndex(c => c.username === deleteuser);
        if (index > -1) {
        this.user.splice(index, 1);
        console.log("Kullanıcı kaldırıldı.", this.user);
        }
    }   
}

const instructorLogin1 = new instructorLogin();
const newIns = new instructors("Engin Demiroğ","ed@kio.com")
const newIns2 = new instructors("Ahmet Çetinkaya","ac@kio.com")

instructorLogin1.addInstructor(newIns);
instructorLogin1.addInstructor(newIns2);

instructorLogin1.getInstructor("Engin Demiroğ")
instructorLogin1.deleteInstructor("Engin Demiroğ")

const userLogin1 = new userLogin();
const newUs = new users("Ekin Uygun","eg@kio.com")
const newUs1 = new users("Ecesu Turan", "et@kio.com")

userLogin1.addUser(newUs)
userLogin1.addUser(newUs1)

userLogin1.getUser("Ekin Uygun")
userLogin1.deleteUser("Ecesu Turan")

const enterCourse1 = new enterCourse();
const newCo = new courses(1,"Engin Demiroğ","Yazılım Geliştirici Yetiştirme Kampı C# + Angular")
const newCo1 = new courses(2,"Engin Demiroğ","(2022) Yazılım Geliştirici Yetiştirme Kampı (JAVA)")

enterCourse1.addCourse(newCo)
enterCourse1.addCourse(newCo1)

enterCourse1.getCourse(1)
enterCourse1.getCourseInstructor("Engin Demiroğ")

enterCourse1.deleteCourse("(2022) Yazılım Geliştirici Yetiştirme Kampı (JAVA)")