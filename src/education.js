import pvm from './pvm.jpg'
import iiest from './iiest.jpg'
import nl2br from 'react-newline-to-break'; 
const cplist=[
    {
        id:1,
        web:"http://purwanchalvidyamandir.org/",
        img: pvm,
        title:"Primary and Higher Secondary Education",
        text:nl2br("ICSE - 96%(Science) \n ISC - 98.5% (Science)"),
    },
    {
        id:2,
        web:"https://www.iiests.ac.in/",
        img: iiest,
        title:nl2br("Bachelor of Technology (2019 - present) \n Computer Science and Technology"),
        text:"CGPA (Till 2nd sem) - 9.23",
    },

]
export default cplist;