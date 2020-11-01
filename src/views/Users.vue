<template>
<div>
    <list-view :tableHeaders="tableHeaders" :tableRows="users" :columnNamesToSort="columnNamesToSort"/>

</div>
</template>

<script>
import ListView from '@/components/ListView.vue';

export default {
    name: "Users",

    components: {
        ListView
    },
    data() {
        return {

            tableHeaders:[],
            columnNamesToSort:[],
            users:[],
        };
    },
    mounted() {
        this.GetUsers();
        this.SetTableHeaders();
        this.SetColumnNamesToSort();

    },
    methods: {
        GetUsers() {
            let users = JSON.parse(this.$localStorage.get('users'));
            if (users != undefined) this.users = users;
            else {
                this.users.push({
                    userId: 1,
                    firstName: 'Web Developer',
                    lastName: 'Web Developer',
                    gender: 'Male',
                    dateOfBirth: '2020-10-01',
                    city: 'Web Developer',
                    phone: '01914658423',
                    email: 's.sharna06@gmai.com'
                },
                {
                    userId: 2,
                    firstName: 'Web ',
                    lastName: 'Web Developer',
                    gender: 'Male',
                    dateOfBirth: '2020-9-02',
                    city: 'Web Developer',
                    phone: '01914658423',
                    email: 's.sharna06@gmai.com'
                },
                {
                    userId: 3,
                    firstName: ' Developer',
                    lastName: 'Web Developer',
                    gender: 'Male',
                    dateOfBirth: '2021-10-02',
                    city: 'Web Developer',
                    phone: '01914658423',
                    email: 's.sharna06@gmai.com'
                });
                this.$localStorage.set('users', JSON.stringify(this.users));
            }
        },
        SetTableHeaders(){
            this.tableHeaders.push({
                columnName:'Name',
                key: 'firstName',
                sortable:true,
            },
            {
                columnName:'Gender',
                key: 'gender',
                sortable:true,
            },
            {
                columnName:'DateofBirth',
                key: 'dateOfBirth',
                sortable:true,
            },
            {
                columnName:'Email',
                key: 'email',
                sortable:true,
            },
            {
                columnName:'Phone',
                key: 'phone',
                sortable:true,
            }
            );

        },
        SetColumnNamesToSort(){
            this.columnNamesToSort.push(
                {
                columnName:'First Name',
                key: 'firstName',
                type:'text'
            },
             {
                columnName:'Last Name',
                key: 'lastName',
                type:'text'
            },
             {
                columnName:'Date Of Birth',
                key: 'dateOfBirth',
                'type': 'date'
            });

        },
    },

};
</script>
