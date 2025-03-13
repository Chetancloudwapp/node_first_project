/**

ExpressJs Response Methods :-

1). res.send() :- Iske andar hum given datatype ko client ke pass bhej sakte hain. Isme hum string, object, array, buffer, html, json, etc bhej sakte hain.
2). res.json() :- Isme hum json(Javascript Object Notation) data bhej sakte hain.
3). res.jsonp() :- Isme hum jsonp(Javascript Object Notation with Padding) data bhej sakte hain.Iska use specially vaha krte hai jaha alag alag origin se json ka data aaraha ho . It is less secure than json method and agar frr bhi hume iska use krna hai to iske liye hume cors name ka package use krna padta hai.
4). res.redirect() :- Isme hum url ko redirect kr sakte hain.
5).** res.render() :- Isme hum views ke data ko render kr sakte hain.(i.e poori html ki file ko hi render krna hoto iska use krte hain) open HTMl file using a template engine.
6). res.download() :- Isme hum kisi bhi file ko download kr sakte hain server se like PDF, Image, file, Music, Video, Excel etc
7). res.sendFile() :- Isme hum kisi bhi file ko send kr sakte hain server se like PDF, Image, file, Music, Video, Excel etc
8). res.end() :- Agar hume response ko end krna hai condition ke behalf pr to iss method ka use krte hain.
9). res.status() :- Isme hum status code ko set kr sakte hain.
10). res.sendStatus() :- Isme hum status code ko send kr sakte hain.
11). res.headersSent :- Yhh Basically yhh check krta hai ki response sent hua hai ya nahi.     
12). res.get() & res.set() :- Yhh basically ek variable ki tarah kaam krta hai value ko get and set krwane k liye

// -------------------- Redirection Code ------------------- //

1). code- 

*/