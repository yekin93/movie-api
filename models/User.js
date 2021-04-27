class User{
    constructor(id, companyId, name, surname, email, password, createdTime, modifiedTime, company){
        this.id = id;
        this.companyId = companyId;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.createdTime = createdTime;
        this.modifiedTime = modifiedTime;
        this.company = company;
    }

    userSql(){
        return "user.id user_id, "+
                "user.company_id user_company_id, "+
                "user.name user_name, "+
                "user.surname user_surname, "+
                "user.email user_email, "+
                "user.created_time user_created_time, "+
                "user.modified_time user_modified_time";
    }

    userResult(result){
        return new User(result.user_id, result.user_company_id, result.user_name, result.user_email, result.user_surname, result.user_created_time, result.user_modified_time);
    }

    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }

    getCompanyId(){
        return this.companyId;
    }
    setCompanyId(companyId){
        this.companyId = companyId;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getSurname(){
        return this.surname;
    }
    setSurname(surname){
        this.surname = surname;
    }

    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }

    getPassword(){
        return this.password;
    }
    setPassword(){
        this.password = password;
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

    getCompany(){
       return this.company;
    }
    setCompany(company){
        this.company = company;
    }

}
module.exports = User;