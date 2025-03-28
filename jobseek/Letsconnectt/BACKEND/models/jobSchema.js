import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please provide job title"],
        minLength:[5,"Job title should have atlease 3 characters"],
        maxLength:[350,"Job title cannot exceed 350 chars"],
    },
    description:{
        type:String,
        required:[true,"please provide job description"],
        minLength:[50,"Job description should have atlease 50 characters"],
        maxLength:[350,"Job title cannot exceed 350 chars"],
    },
    category:{
        type:String,
        required:[true,"Job category is required"],

    },
    country:{
        type:String,
        required:[true,"country is required"],

    },
    city:{
        type:String,
        required:[true,"city is required"],
    },
    location:{
        type:String,
        required:[true,"location is required"],
        minLength:[20, "Job location must contains 50 chars"],
    },
    fixedSalary:{
        type:Number,
        minLength: [4,"fixed salary must contains at least 4 digits"],
        maxLength:[9,"Fixed salary cannot exceed 9 digits"],
    },
    salaryFrom:{
        type:Number,
        minLength: [4," salary from must contains at least 4 digits"],
        maxLength:[9," salary from cannot exceed 9 digits"],
    },
    salaryTo:{
        type:Number,
        minLength: [4," salary to must contains at least 4 digits"],
        maxLength:[9," salary to cannot exceed 9 digits"],
    },
    expired :{
        type:Boolean,
        default:false,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        req:true,
    },
});

export const Job = mongoose.model("Job",jobSchema);