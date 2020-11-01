<template>
<div class="row">
    <div class="col-sm-2">
           
    </div>
    <div class="col-sm-8 mt-5 border">
        <h4 class="mt-4">Create User</h4>
        <form class="p-4 mb-5">
            
            <div class="form-row">

                <div class="form-group col-md-5 ">
                    <label  class="float-left">First Name <span class="text-danger">&#42;</span></label>
                    <input type="text" class="form-control"  placeholder="First Name">
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-5">
                    <label class="float-left">Last Name <span class="text-danger">&#42;</span></label>
                    <input type="text" class="form-control"  placeholder="Last Name">
                </div>

            </div>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label class="float-left">Gender <span class="text-danger">&#42;</span></label>
                    <select  class="form-control">
                        <option selected>Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label  class="float-left">Date of Birth <span class="text-danger">&#42;</span></label>
                    <input type="date" class="form-control" placeholder="First Name">
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-5">
                    <label  class="float-left">City</label>
                    <input type="text" class="form-control"  placeholder="City">
                </div>

            </div>
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label class="float-left">Email <span class="text-danger">&#42;</span></label>
                    <input type="email" class="form-control" placeholder="Email">
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-5">
                    <label  class="float-left">Phone <span class="text-danger">&#42;</span></label>
                    <input type="number" class="form-control"  placeholder="Phone">
                </div>
            </div>
            

            <button type="submit" class="btn btn-md btn-primary float-right mt-4 mr-5 " style="width:8rem">Save</button>
        </form>

    </div>

</div>

</div>
</template>

<script>
export default {
    name: 'CreateUser',
    components: {

    },
    data() {
        return {

        };
    },

    methods: {

    }
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