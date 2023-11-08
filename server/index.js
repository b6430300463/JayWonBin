const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"jayjay23",
    database:"smartmaid"
})


app.post('/create',(req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
     if (!username || !password || !email) {
         return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
       }
    
       if (password.length < 8 || password.length > 20) {
         return res.status(400).send("รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร");
       }
    
       if (!email.includes('@')) {
         return res.status(400).send("อีเมลไม่ถูกต้อง");
       }
    db.query("INSERT INTO users (firstname,lastname,username,password,email) VALUES (?,?,?,?,?)",
        [firstname,lastname,username,password,email],
        (err,result) => {
            if (err) {
                return res.status(400).send("เกิดข้อผิดพลาดในการเพิ่มข้อมูล");
              } else {
                return res.status(200).send("ค่าถูกเพิ่มเข้าสู่ฐานข้อมูล");
                
              }
        }
    );
});

app.post('/login',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err,result) => {
            if(err){
                console.log(err);
                res.status(500).send("เกิดข้อผิดพลาดในการล็อกอิน");
            }else{
                if (result.length > 0) {
                    // ล็อกอินสำเร็จ
                    res.send("ล็อกอินสำเร็จ");
                } else {
                    // ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง
                    res.status(401).send("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
                }
            }
        }
    );
});

// app.get('/users/:id',(req,res) => {
//     const id = req.params.id;
//     db.query("SELECT * FROM users where id = ?",[id], (err,result) => {
//         if(err){
//             console.log(err);
//         } else{
//             res.send(result);
//         }
//     });
// });
app.get('/users/:username',(req,res) => {
    const username = req.params.username;
    db.query("SELECT * FROM users where username = ?",[username], (err,result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
app.get('/statedistance', function(req, res){
    con.query('select * from statedistance', function(error, rows, fields){
          if(error) console.log(error);
  
          else{
              console.log(rows);
              res.send(rows);
  
          }
  
    });
  });
  
  app.post('/state', function(req, res){
    const s =req.body.state
    con.query('UPDATE statedistance1 SET state=? WHERE 1',[s], function(error, rows, fields){
          if(error) console.log(error);
          else{
              console.log(rows);
              res.send(rows);
          }
  
    });
  });

app.listen('3001', () => {
    console.log('Server is ruuning...');
}) 