import User from "../model/userModel.js";

export const registerUser=async(req,res)=>{
    try {
        
        const { firstName, lastName, email } = req.body;
        // await User.sync();  // if you are not using hooks then run this every file where you want insert data in table
        const user = await User.create({ firstName, lastName, email });
    
        res.status(201).json(user);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}