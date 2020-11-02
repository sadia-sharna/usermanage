<template>
<div class="container">
    <div class="card mt-5 ">
        <div class="card-header text-center bg-light ">
            <span class="text-center font-weight-bold">Users</span>

        </div>

        <div class="card-body text-left">
            <div class="row mb-2">
                <div class="col-md-2">
                    <select class="form-control" name="" v-model="pageSize">

                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="100">100</option>

                    </select>
                </div>
                <div class="col-md-7"></div>
                <div class="col-md-3">

                    <select class="form-control" v-model="columnToSort" @change="SortByColumn(columnToSort)">
                        <option disabled selected>Sort By</option>
                        <option :value="item" v-for="(item,ind) in columnNamesToSort" :key="ind">{{item.columnName}}</option>
                       

                    </select>

                </div>

            </div>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col" v-for="(item,ind) in tableHeaders" :key="ind">{{item.columnName}}</th>

                        </tr>

                    </thead>
                    <tbody>
                        <tr v-for="(rows,index) in displayRows" :key="index" scope="row">

                            <td v-for="(headers,ind) in tableHeaders" :key="ind">
                                {{rows[headers.key]}}
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <v-pagination v-show="tableRows.length>0" v-model="pageNumber" :page-count="pageCount" :classes="bootstrapPaginationClasses" :labels="paginationAnchorTexts"></v-pagination>

        </div>

    </div>
</div>
</template>

<script>
import vPagination from 'vue-plain-pagination';
export default {
    name: "ListView",
    props: {
        tableHeaders: Array,
        tableRows: Array,
        columnNamesToSort: Array
    },

    components: {
        vPagination
    },
    data() {
        return {
            pageSize: 5,
            pageNumber: 1,
            columnToSort: 'Sort By',
            bootstrapPaginationClasses: {
                ul: 'pagination',
                li: 'page-item',
                liActive: 'active',
                liDisable: 'disabled',
                button: 'page-link'
            },
            paginationAnchorTexts: {
                first: 'First',
                prev: 'Previous',
                next: 'Next',
                last: 'Last'
            },

        };
    },

    computed: {
        displayRows() {
            return this.Pagination();
        },
        pageCount() {
            if (this.tableRows.length > this.pageSize)
                return Math.ceil(this.tableRows.length / this.pageSize);
            this.pageNumber = 1;
            return 1;

        },

    },

    methods: {

        Pagination() {

            let from = (this.pageNumber * this.pageSize) - this.pageSize;
            let to = (this.pageNumber * this.pageSize);
            return this.tableRows.slice(from, to);
        },

        SortByColumn(item) {
            if(item.type=='text'){
                return this.displayRows.sort((a, b) => {
                if (a[item.key] < b[item.key]) return -1;
                else if (a[item.key] >= b[item.key]) return 1;
                return 0;
            });
         

            }
            else if(item.type=='date'){
                return this.displayRows.sort((a, b) => {
                    return new Date(a[item.key]) - new Date(b[item.key]);

            });
         

            }
            
        },
    },

};
</script>

<style  scoped>

</style>
