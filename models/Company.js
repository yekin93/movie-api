
module.exports = class Company {

    constructor(id, name, isActive, createdTime, modifiedTime) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.createdTime = createdTime;
        this.modifiedTime = modifiedTime;
    }

    companySql(){
        return "company.id company_id, " +
                "company.name company_name, "+
                "company.is_active company_is_active, "+ 
                "company.created_time company_created_time, "+
                "company.modified_time company_modified_time";
    }

    companyResult(result){
        return new Company(result.company_id, result.company_name, result.company_is_active, result.company_created_time, result.company_modified_time);
    }


    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getIsActive(){
        return this.isActive;
    }
    setIsActive(isActive){
        this.isActive = isActive;
    }

    getCreatedTime(){
        return this.createdTime;
    }
    setCreatedTime(createdTime){
        this.createdTime = createdTime;
    }

    getModifiedTime(){
        return this.modifiedTime;
    }
    setModifiedTime(modifiedTime){
        this.modifiedTime = modifiedTime;
    }
}