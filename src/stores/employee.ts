import { defineStore } from 'pinia';
import employee_data from '@/data/employee_data.json';

export const useEmployeeStore = defineStore({
    id: 'employee',
    state: () => ({
        employee: employee_data,
        maxPages: [1,2,3,4,5],
        totalPage: 0,
        filterSize: 5,
        startPage: 0,
        endPage: 5,
        prevValue: 0,
        newValue: 5,
        currentPage: 1,
        dataLength: employee_data.length,
        perPage: employee_data.slice(0, 5)
    }),
    getters: {
        perPagination: (state) => {
           if(state.endPage === state.currentPage){
            state.startPage = Number(state.startPage - 1) + Number(5)
            state.endPage = Number(state.startPage) + Number(5)
           }
           return state.maxPages.slice(state.startPage, state.endPage)
        },
    },
    actions: {
        next(){
            this.filterPage()
            this.currentPage+=1
            let s = (this.currentPage - 1) * this.filterSize
            let e = Number(s) + Number(this.filterSize)

            const max = Math.max(...this.maxPages)
            if(this.currentPage == max){
                this.filterPageDisplay(e, s)
            }
            this.filterPageDisplay(e, s)
            this.prevValue = s
            this.newValue = e
        },
        prev(){
            this.filterPage()
            this.currentPage-=1

            let s = (this.currentPage - 1) * this.filterSize
            let e = Number(s) + Number(this.filterSize)

            const min = Math.min(...this.maxPages)

            if(this.currentPage < 5){
                this.startPage=0
                this.endPage=5
            }else{
                this.startPage-=1
                this.endPage-=1
            }
            
            this.filterPageDisplay(e, s)
            this.prevValue = s
            this.newValue = e
        },
        changePage(page: number){
            this.filterPage()
            let start = (page - 1) * this.filterSize
            let end = Number(start) + Number(this.filterSize)


            this.currentPage = page
            
            this.filterPageDisplay(end, start)
            this.prevValue = start
            this.newValue = end
        },

        // FILTER PAGE SIZE
        filterPage()  {
            this.filterPageDisplay(this.filterSize)
            this.totalOfPages(this.filterSize)
            return this.filterSize
        },

        // FILTER PAGE DISPLAY
        filterPageDisplay(filterSize: number, filterStart: number = 0){
            this.newValue = this.filterSize
            return this.perPage = this.employee.slice(filterStart, filterSize)
        },

        // TOTAL OF PAGES
        totalOfPages(filterSize: number){
            this.totalPage = Math.ceil(this.dataLength / filterSize);
            this.maxPages =  this.pageRange(this.totalPage, 1).slice(0)
            return this.totalPage
        },

        // INCREMENT RANGE OF PAGE 
        pageRange(size: number, startAt: number) {
            return [...Array(size).keys()].map(i => i + startAt);
        },

        // PROFILE 
        employeeProfile(employeeId: number){
            const profile = this.employee.find(({id}) => id == employeeId);
            return profile
        },
    }
})