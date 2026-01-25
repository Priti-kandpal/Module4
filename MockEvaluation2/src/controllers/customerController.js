import supabase from "../../supabaseClient.js";

export const registerCustomer =async(req,res)=>{
    const {full_name , email, phone }=req.body;
    if (!full_name || !email || !phone){
        return res.status(400).json({error:"All fields required "});
    }
    //to check duplicate email
    const {data :existing}= await supabase
    .from("customers")
    .select("id")
    .eq("email",email)
    .single();
    
    if (existing) {
        return res.status(409).json({error:
            "email already exists"
        })
    }
    const {data, error }= await supabase
    .from ("customers")
    .insert([{ full_name , email, phone}])
    
    if(error){
        return res.status(500).json({error:error.message});
    }
    res.status(201).json({message : "customer registered", data})
};