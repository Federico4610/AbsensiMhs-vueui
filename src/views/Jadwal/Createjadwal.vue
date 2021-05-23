<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add Jadwal</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Jadwal</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="jadwals.jadwal"
          />
          <div class="alert alert-danger" v-if="validation.jadwal">
            {{ validation.jadwal[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Matakuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="jadwals.matakuliah_id"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah_id">
            {{ validation.matakuliah_id[0] }}
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const jadwals = reactive({
      jadwal: "",
      matakuliah_id: "",
    });
    const validation = ref([]);
    const router = useRouter();
    function store() {
      let jadwal = jadwals.jadwal;
      let matakuliah_id = jadwals.matakuliah_id;
      axios
        .post("http://127.0.0.1:8000/api/jadwal", {
          jadwal: jadwal,
          matakuliah_id: matakuliah_id,
        })
        .then(() => {
          router.push({
            name: "Jadwal",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      jadwals,
      validation,
      router,
      store,
    };
  },
};
</script>