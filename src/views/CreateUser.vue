<template>
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8 mt-5 border">
        <h4 class="mt-4">Create User</h4>
        <div class="p-4 mb-5">
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label class="float-left">First Name <span class="text-danger">&#42;</span></label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="user.firstName" />
                    <div >
                        <small class="text-danger float-left">{{ fNameErrMsg }}</small>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-5">
                    <label class="float-left">Last Name <span class="text-danger">&#42;</span></label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="user.lastName" />
                    <div >
                        <small class="text-danger float-left">{{ lnameErrMsg }}</small>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label class="float-left">Gender <span class="text-danger">&#42;</span></label>
                    <select class="form-control" v-model="user.gender">
                        <option selected disabled>Choose</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div >
                        <small class="text-danger float-left">{{ genderErrMsg }}</small>
                    </div>
                </div>
                <div class="form-group col-md-3">
                    <label class="float-left">Date of Birth <span class="text-danger">&#42;</span></label>
                    <input type="date" class="form-control" v-model="user.dateOfBirth" />
                    <div>
                        <small class="text-danger float-left">{{ dobErrMsg }}</small>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-5">
                    <label class="float-left">City</label>
                    <input type="text" class="form-control" placeholder="City" v-model="user.city" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label class="float-left">Email <span class="text-danger">&#42;</span></label>
                    <input type="email" class="form-control" placeholder="Email" v-model="user.email" />
                    <div >
                        <small class="text-danger float-left">{{ emailErrMsg }}</small>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-5">
                    <label class="float-left">Phone <span class="text-danger">&#42;</span></label>
                    <input type="number" class="form-control" placeholder="Phone" v-model="user.phone" />
                    <div >
                        <small class="text-danger float-left">{{
                phoneErrMsg
              }}</small>
                    </div>
                </div>
            </div>

            <button type="btn" class="btn btn-md btn-primary float-right mt-4 mr-5" style="width: 8rem" @click="SubmitUser()">
                Save
            </button>
        </div>
    </div>
</div>
</template>

<script>
import moment from "moment";
export default {
    name: "CreateUser",
    components: {},
    data() {
        return {
            user: {},
            phoneErrMsg: "",
            emailErrMsg: "",
            fNameErrMsg: "",
            lnameErrMsg: "",
            genderErrMsg: "",
            dobErrMsg: "",
            nullMsg: "This field is required!",
            users: []
        };
    },

    mounted() {
        this.GetUsers();
    },

    computed: {
        latestId() {

            return (this.users.length > 0) ? this.users[this.users.length - 1].userId : 0;

        },
    },

    methods: {
        IsPhoneValid() {
            let phoneno = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
            if (this.user.phone.match(phoneno)) {
                return true;
            } else {
                return false;
            }
        },
        IsEmailValid() {
            let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (this.user.email.match(email)) {
                return true;
            } else {
                return false;
            }
        },

        IsDobValid() {
            let dateOfBirth = moment(this.user.dateOfBirth);
            let getDateof100yearsBack = moment(new moment().subtract(100, "years"));
            if (
                dateOfBirth
                .startOf("day")
                .diff(getDateof100yearsBack.startOf("day"), "days") >= 0 &&
                dateOfBirth.startOf("day").diff(new moment().startOf("day"), "days") <=
                0
            )
                return true;
            else return false;
        },
        IsValid() {
            let nullExist = false;
            console.log(this.user);
            if (this.user.firstName == null || this.user.firstName == "") {

                this.fNameErrMsg = this.nullMsg;
                nullExist = true;
            } else if (
                this.user.firstName.length < 2 ||
                this.user.firstName.length > 50
            ) {

                this.fNameErrMsg = "Length should be between 2-50 characters";
                nullExist = true;
            } else {

                this.fNameErrMsg = "";

            }

            if (this.user.lastName == null || this.user.lastName == "") {

                this.lnameErrMsg = this.nullMsg;
                nullExist = true;
            } else if (
                this.user.lastName.length < 2 ||
                this.user.lastName.length > 50
            ) {

                this.lnameErrMsg = "Length should be between 2-50 characters";
                nullExist = true;
            } else {

                this.lnameErrMsg = "";

            }

            if (this.user.gender == null || this.user.gender == "") {

                this.genderErrMsg = this.nullMsg;
                nullExist = true;
            } else {

                this.genderErrMsg = "";

            }
            if (this.user.dateOfBirth == null || this.user.dateOfBirth == "") {

                this.dobErrMsg = this.nullMsg;
                nullExist = true;
            } else if (!this.IsDobValid()) {

                this.dobErrMsg = "Invalid Date of Birth";
                nullExist = true;
            } else {

                this.dobErrMsg = "";

            }
            if (this.user.phone == null || this.user.phone == "") {

                this.phoneErrMsg = this.nullMsg;
                nullExist = true;
            } else if (!this.IsPhoneValid()) {

                this.phoneErrMsg = "Invalid Phone Number";
                nullExist = true;
            } else {
                this.phoneErrMsg = "";


            }
            if (this.user.email == null || this.user.email == "") {

                this.emailErrMsg = this.nullMsg;
                nullExist = true;
            } else if (!this.IsEmailValid()) {

                this.emailErrMsg = "Invalid Email";
                nullExist = true;
            } else {
                this.emailErrMsg = "";


            }
            return nullExist;
        },

        GetUsers() {
            let users = JSON.parse(this.$localStorage.get('users'));
            if (users != undefined) this.users = users;
            else {
                this.users = [];
                this.$localStorage.set('users', JSON.stringify(this.users));
            }
        },

        SubmitUser() {

            if (!this.IsValid()) {

                let fullName = JSON.parse(JSON.stringify(`${this.user.firstName} ${this.user.lastName}`));

                this.$set(this.user, 'fullName', fullName);
                this.$set(this.user, 'userId', this.latestId);
                this.users.push(this.user);
                this.$localStorage.set('users', JSON.stringify(this.users));
                window.location = `#/users`;

            }
        },
    },
};
</script>
<style scoped>
.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -3%;
    margin-left: 4%;
}
</style>
