const productService  = require('../services/product')

exports.add = async(req,res)=>{
    const response =await productService.add(req.body)
    res.send(response)
}

exports.update = async(req,res)=>{
    const response =await productService.update(req.body)
    res.send(response)  
}

exports.fetchAll = async(req,res)=>{
    const response =await productService.fetchAll()
    res.send(response)
}
 
exports.single = async(req,res)=>{
    const response =await productService.single(req.params)
    res.send(response)
}

exports.delete = async(req,res)=>{
    const response =await productService.delete(req.params)
    res.send(response)
}