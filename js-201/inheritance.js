 let student={
     batch:"web18",
     institute:"masai",
     unit:3,
     course:"FSD"
 };
 let s1=Object.create(student)
 s1.name="harry";
 s1.roll_no="fw18_1008";
 let s2=Object.create(student,{name:{value:"parry"},roll_no:{value:"fw18_1008"}})
//  s2.name="parry";
//  s2.roll_no="fw18_1212"
 console.log(s1,s2)