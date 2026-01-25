import supabase from "../../supabaseClient.js";

//  add order
export const addOrder = async(req, res)=> {
    const {product_name, quantity, price, customerId}= req.body;
      
    if (!product_name || !quantity || !price || !customerId){
        return res.status(400).json({error:"All fields required "});
    }
     const {data : customer}= await supabase
    .from("customers")
    .select("id")
    .eq("id",customerId)
    .single();


    if (!customer) {
        return res.status(404).json({error:
            "customer not found"
        })
    }
    const {data, error }= await supabase
    .from ("orders")
    .insert([{ product_name, quantity, price, customer_id:customerId}])
    
    if(error){
        return res.status(500).json({error:error.message});
    }
    res.status(201).json({message : "order added", data})
};

// get orders

export const getOrders= async (req,res)=>{
    const {customerId}=req.params;

    const {data}=await supabase
      .from("orders")
    .select("*")
    .eq("customer_id",customerId)
   
    res.json({orders: data});
};

// update order

export const updateOrder = async (req,res)=>{
    const {orderId}=req.params;

    const {quantity, price, order_status}=req.body;
    
      const {error}=await supabase
      .from("orders")
    .update({quantity, price, order_status})
    .eq("id",orderId)

  if(error){
    return res.status(500).json({error: error.message})
  };
  res.json
  ({message:"oreder updated"});
};

// delete order


export const deletetOrder = async (req,res)=>{
    const {orderId}=req.params;
const {error}=
    await supabase
    .from("orders")
    .delete()
    .eq("id",orderId)

      res.json({message:"oreder deleted"});
};



