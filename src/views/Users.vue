<template>
<div>
    <list-view :tableHeaders="tableHeaders" :tableRows="users" :columnNamesToSort="columnNamesToSort" tableHeading="Users"/>

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
                    firstName: 'Sadia',
                    lastName: 'Nehrin',
                    gender: 'Female',
                    dateOfBirth: '2020-10-01',
                    city: 'Dhaka',
                    phone: '01914658422',
                    email: 's.sharna06@gmai.com',
                    fullName: "Sadia Nehrin",
                },
                {
                    userId: 2,
                    firstName: 'Abrar',
                    lastName: 'Ihsas',
                    gender: 'Male',
                    dateOfBirth: '2020-11-01',
                    city: 'Dhaka',
                    phone: '01914658523',
                    email: 'abrar@gmai.com',
                    fullName: 'Abrar Ihsas',
                },
                {
                    userId: 3,
                    firstName: 'Sufia',
                    lastName: 'Akter',
                    gender: 'Female',
                    dateOfBirth: '1990-06-06',
                    city: 'Dhaka',
                    phone: '01714658527',
                    email: 'sufia@gmai.com',
                    fullName: 'Sufia Akter',
                });
                this.$localStorage.set('users', JSON.stringify(this.users));
            }
        },
        SetTableHeaders(){
            this.tableHeaders.push({
                columnName:'Name',
                key: 'fullName'
            },
            {
                columnName:'Gender',
                key: 'gender'
            },
            {
                columnName:'DateofBirth',
                key: 'dateOfBirth'
            },
            {
                columnName:'Email',
                key: 'email'
            },
            {
                columnName:'Phone',
                key: 'phone'
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
