// const User = require("./models/User.model")
// const fs = require("fs")
// let student_codes = `fw17_0118
// fw17_0533
// fw17_0821
// fw16_133
// fw17_0880
// fw17_0978
// fw17_0717
// fw17_0102
// fp02_052
// fw17_0863
// fw17_0684
// fw17_0579
// fw15_355
// fp01_212
// fw17_0196
// fw17_0248
// fw17_0104
// fw17_0181
// fw17_0785
// fw16_417
// fw17_0038
// fw17_0924
// fw17_0158
// fw17_0669
// fw15_168
// fw17_0652
// fw17_0688
// fw16_518
// fw15_472
// fw17_0759
// fw17_0166
// fw17_1060
// fp02_014
// fw17_0520
// fw17_0151
// fw17_0567
// fw17_1022
// fp02_019
// fw16_611
// fp01_208
// fw17_0400
// fw16_134
// fw17_0226
// fw17_0231
// fw17_0700
// fw17_0513
// fw17_0261
// fw17_0396
// fp02_037
// fw17_0721
// fw17_0563
// fw17_0370
// fw16_551
// fw17_0078
// fw17_0249
// fw17_0723
// fw17_0279
// fw17_0091
// fw17_0465
// fw17_0623
// fw17_0984
// fw16_312
// fw16_513
// fp02_156
// fw17_0478
// fp02_053
// fp02_031
// fw17_0321
// fw17_0012
// fp01_092
// fw17_0219
// fw16_254
// fw17_0280
// fw17_0283
// fw17_0045
// fp01_200
// fw17_0710
// fw17_0200
// fw17_0205
// fp01_072
// fp02_150
// fw17_0052
// fw17_0802
// fw17_0141
// fw16_504
// fw17_0573
// fw17_0239
// fw17_0344
// fw17_1056
// fw17_0009
// fw17_0888
// fw17_0374
// fw17_0729
// fw16_060
// fw16_075
// fw17_0291
// fw17_0404
// fw16_407
// fw17_0067
// fw17_0031
// fw17_0956
// fw17_0333
// fw17_0011
// fw15_128
// fw17_0586
// fw17_0373
// fw17_0917
// fw17_0711
// fw17_0541
// fw17_0518
// fw16_024
// fw17_1070
// fw17_0415
// fw17_0048
// fw17_0112
// fw17_0120
// fp01_172
// fw17_0776
// fw17_0599
// fw17_0797
// fw17_0859
// fw17_0381
// fw17_0175
// fw17_0099
// fw17_0417
// fw17_0769
// fw17_1075
// fw17_0838
// fw17_0314
// fp02_004
// fw17_0276
// fw17_0463
// fw17_0734
// fp02_117
// fw17_0346
// fp02_083
// fw17_0709`
// let student_names = `Harsh Singh
// Rohit Dhatrak
// Mamata Ghanshyam Ingole
// Rudra Tiwari
// Mukul
// Mahesh Limbaji Raut
// Anuj Kumar
// Kunal Pratap Singh
// Merugu Priyankar
// Atul Pandey
// Kiran Digambar Kamble
// Shakir Ayoub
// Ashutosh Mahapatra
// Ganesh Aher
// Avi Andhariya
// Ratna Das
// Hemant Ramdatt Prajapati
// Manju Sarihaddu
// Thoriya Savjit Mohanbhai
// Shivam Hanmantrao Shinde
// Vivek Goswami
// Ratnesh Kumar
// Aditya Sharma
// Harshal Patil
// Praful Tandekar
// Ashok Kumar
// Rahul Kumar
// Ashwini Prakash
// Shoaib Mushtak Patel
// Roushan Gupta
// Ashish Kumar Agnihotri
// Anurag Singh Rajawat
// Jitendra Sharma
// Rohaan Telangur
// Ashish Kumar Prusty
// Puneet Chaubey
// Parvat Raj
// Dipak Shantaram Shinde
// Shivam Gupta
// Biman Gharai
// Rovin Singh
// Chadive Sreenath
// Vivek Rana
// Inder Pal
// Rayala Harish
// Shivam Sunil Rathod
// Akash Subhash Bhoi
// Harishankar Patra
// Manish Singh Chouhan
// Saurabh Patel
// Rohit Kumar Singh
// Akash Keshari
// Aman Khan
// Dinesh Devidas Karde
// Ashutosh Vishwakarma
// Jyoti Kamal Singh
// Sudeep Haldar
// Krunal Raju Bhandekar
// Swapnil Kushwaha
// Bhuse Vishal Vishnu
// Rajashree Chakraborty
// Saurabh Kumar
// ankita singh
// Swapnil Vijay Ramteke
// Manish Singh
// Prabhat Singh
// Shubham
// Suraj Kisanrao Badwaik
// Shailesh Kumar
// Ayush Anshu
// Dev Ashish Saurabh
// Rajat Soni
// Suraj Kishor Dongre
// Akshay Hanumant Kanherkar
// Ravi Kumar Dharmaraj Nishad
// Sachin Vishwanath Kudande
// Anurag Dinkar Pawar
// Gagan Chandan P
// Hemanth Kumar C N
// Aditi Tukaram Hinge
// Rishi Ranjan Kumar
// Gaurav Krishna Verma
// Deepanshu Chugh
// Om Prakash Gupta
// Prabhat Bhardwaj
// Nachiket Lele
// Madhuri Patel
// Sirtaj Khan
// Ravi Dhamne
// Shristi Kumari
// Vishal Gholve
// Manish Yadav
// Deepak Mandal
// CHANDRAPRAKASH SAHU
// Yatharth Yadu
// Kaustubh Badve
// Khan Faisal Zahid
// Kalyani Vilasrao Kenekar
// Sharang Ahirekar
// Rahul Rajeevan
// Arjun Singh
// Prajwal Jaiswal
// Shivam
// Nageshwar Tripathi
// Manish Tiwari
// Komal Tiwari
// Shreeprada Divakar Bhat
// Shivam Radheshyam Bais
// Siddikkhan Imtiyajkhan Pathan
// Piyush Subhash Narkhede
// Rohit sahu
// Eswar Sai
// Kundan Kumar
// Aakarsh
// Riya Shah
// Richa Shah
// Chhatrapal Ahirwar
// Mohammad Ayaz Noori
// Somyakant Mohapatra
// Ashwini Subhash Perewar
// Shashank Kumar
// Sachin Kumar
// Arun Kumar Yadav
// Swati Kushwaha
// Prathyush Nair
// Lalith Sai
// Bheem Ratan
// Prakarsh Prasar
// Jai Krishna Singh
// Dinesh Singh
// Sagar Gondage
// Saurav Samui
// Pratik Dilip Mate
// Ramesh Vithoba Mane
// Sarbjot Singh
// Shriram Deshpande
// Shubham Barore`
// let student_emails = `harsh.singh9055@gmail.com
// rvd.dhatrak123@gmail.com
// mamataingole125@gmail.com
// nautscode@gmail.com
// mukuljatav1010@gmail.com
// rautmahii96@gmail.com
// code4me99@gmail.com
// 1.3kunal.tt@gmail.com
// priyareddy2718@gmail.com
// pandeyatul429@gmail.com
// kirankamble4595@gmail.com
// shakirayoubbhat@gmail.com
// ashutoshm439@gmail.com
// aherganesh194@gmail.com
// avi.andhariya@gmail.com
// ratnadas149@gmail.com
// hemantprajapati20500@gmail.com
// sarihaddumanju@gmail.com
// sahil.thoriya96@gmail.com
// shindeshivam2906@gmail.com
// vivekgoswamidbng@gmail.com
// ratnesh2112@gmail.com
// adityarsharma314@gmail.com
// harshalpatil655@gmail.com
// prafultandekar1997@gmail.com
// kumarashoka7677@gmail.com
// rahul850kr@gmail.com
// ashwini23bce@gmail.com
// Patelshoaib125@gmail.com
// roushangupta85@gmail.com
// agnih96@gmail.com
// anurjwt@gmail.com
// sharmacs8853@gmail.com
// rohaan.telangur@gmail.com
// ashisprusty71@gmail.com
// puneetchuabey9687@gmail.com
// parvat.raj2@gmail.com
// deepakshinde3346@gmail.com
// shivam.gupta200719@gmail.com
// bimangharai721443@gmail.com
// rovin7678@gmail.com
// sreenath.chadive@gmail.com
// vivekrana13420@gmail.com
// inder39811@gmail.com
// harishrayala2379@gmail.com
// rathodshivam05@gmail.com
// manishbhoi1997@gmail.com
// harishankarpatra999@gmail.com
// manishchouhan2396@gmail.com
// psaurabh700.sp@gmail.com
// rohitsingh17031995@gmail.com
// akashkeshari2722000@gmail.com
// rabiyasalim.khan@gmail.com
// dineshkarde52@gmail.com
// ashuvish79@gmail.com
// jyotikamal150499@gmail.com
// haldarsudeep28@gmail.com
// krunalbhandekar10@gmail.com
// ashukushwaha15031997@gmail.com
// vbhuse2407@gmail.com
// rjchakraborty98@gmail.com
// saurabh.vicky1995@gmail.com
// ankitaaditi2903@gmail.com
// shaukatsheikh87@gmail.com
// msmsmanishkumar64@gmail.com
// topi9864@gmail.com
// kapoorshubham483@gmail.com
// surajbadwaik0309@gmail.com
// shaileshrajvicky555@gmail.com
// ayushanshu56@gmail.com
// onlyvishwasindia@gmail.com
// rajatsoni.rs66@outlook.com
// surajdongre8@gmail.com
// akshaykanherkar7@gmail.com
// ravicoder264@gmail.com
// sachinkudande1138@gmail.com
// anuragpawar.me@gmail.com
// victor20sara20@gmail.com
// kumhem9@gmail.com
// aditihinge98@gmail.com
// rishibhumi000@gmail.com
// gauravverma004@gmail.com
// deepanshuchugh24@gmail.com
// omprakash1997242@gmail.com
// sandhyabhardwaj1832000@gmail.com
// nachiketlele73@gmail.com
// deepaks.deepu15@gmail.com
// ksirtaj29@gmail.com
// ravid1904@gmail.com
// shristikumari759@gmail.com
// vishalgholve999@gmail.com
// manishyadav78642080@gmail.com
// deepak.studentid2030@gmail.com
// aaryan3091@gmail.com
// yatharth.yadu66@gmail.com
// kaustubhbadve7@gmail.com
// faisal.z.khan5538@gmail.com
// kalyaniknkr@gmail.com
// sharangahirekar1@gmail.com
// rahul.rajeevan4@gmail.com
// arjunbhakuni23@gmail.com
// jaisprajwal.1999@gmail.com
// itsurshivam9@gmail.com
// nntivari11111@gmail.com
// manisht.mt.mt@gmail.com
// atulzv1999@gmail.com
// shreepradadb@gmail.com
// shivambais.sb@gmail.com
// siddikkhanpathan4@gmail.com
// piyushnarkhede02@gmail.com
// sahu86744@gmail.com
// eswarsai219@gmail.com
// kd181197@gmail.com
// aakarsh604@gmail.com
// riyagshah4@gmail.com
// lavaformama@gmail.com
// chhatrapal25825@gmail.com
// tyrogroup786@gmail.com
// msomya143@gmail.com
// ashwiniperewar411@gmail.com
// madhav131ex@gmail.com
// sachinkuom0591998@gmail.com
// arunkumaryadav19031996@gmail.com
// swatikush.4@gmail.com
// prathyu360@gmail.com
// lalithsai101@gmail.com
// bheem501425@gmail.com
// prakprasar@gmail.com
// jksingh00739@gmail.com
// dineshsingh9582@gmail.com
// sagargondage370@gmail.com
// samuisaurav1@gmail.com
// pratikm470@gmail.com
// rameshmane7218@gmail.com
// sarbjots908@gmail.com
// shriramdeshpande77@gmail.com
// shubham07barore@gmail.com`
// let users  = []
// student_codes = student_codes.trim().split("\n")
// student_emails = student_emails.trim().split("\n")
// student_names  = student_names.trim().split("\n")
// for (let i = 0; i< student_codes.length; i++) {
//     let user = {}
//     user.email = student_emails[i];
//     let [first_name, ...last_name] = student_names[i].split(" ")
//     user.first_name = first_name;
//     user.last_name = last_name.join(" ");
//     user.user_id = first_name + "@" + student_codes[i]
//     user.role = "Student";
//     user.password = student_codes[i];
//     users.push(user)
// }

// fs.writeFileSync("data.json",JSON.stringify(users))