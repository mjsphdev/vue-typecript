<script lang="ts">
import { defineComponent } from "vue";
import { useEmployeeStore } from "@/stores/employee";
import { setMapStoreSuffix } from "pinia";

export default defineComponent({
    props: {
        id: Number
    },

    setup(props){
        const employee = useEmployeeStore();
        const profile = employee.employeeProfile(props.id);

        return{
            profile
        }
    }
})
</script>

<template>
    <div class="container">
        <h1 class="fw-light mt-4">Profile</h1>
        <div class="card shadow-sm p-5 mt-5 mb-5 bg-body rounded">
            <div class="d-flex justify-content-end">
                <button class="btn btn-warning" @click="$router.go(-1)"><i class="fa-solid fa-angles-left"></i> Back</button>
            </div>
            <div class="row">
                <div class="col-md-4">
                        <img src="https://i.postimg.cc/9FYsh5n7/138519922-happy-cute-kid-boy-using-laptop-to-do-homework.webp" class="img-fluid float-start mt-5" alt="HELLO">
                </div>
                <div class="col-md-6">
                    <h3 class="display-4 fw-semibold mt-5">{{ profile?.last_name}}, {{ profile?.first_name }}</h3>
                    <p class="fs-5"><i class="fa-solid fa-envelope"></i> {{profile?.email}}</p>
                    <p class="fs-5"><i class="fa-solid fa-person"></i> {{profile?.gender}}</p>
                    <p class="fs-5"><i class="fa-solid fa-cake-candles"></i> {{profile?.birthdate}}</p>
                    <p class="fs-5"><button class="btn btn-success"><i class="fa-solid fa-plus"></i> Follow</button></p>
                </div>
            </div>
        </div>
    </div>
</template>