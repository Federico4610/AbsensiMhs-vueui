<template>
  <div class="kontrak">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createkontrak"
      >Add Kontrak Matakuliah</router-link
    >
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama Mahasiswa</th>
          <th scope="col">Semester</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in kontrak_matakuliah" :key="index">
          <td>{{ data.id }}</td>
          <td>{{ data.mahasiswa_id }}</td>
          <td>{{ data.semester_id }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editkontrak', params: { id: data.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="kontrakDelete(data.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import { ref, onMounted } from "vue";
export default {
  setup() {
    let kontrak_matakuliah = ref([]);
    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/kontrak")
        .then((response) => {
          kontrak_matakuliah.value = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    function kontrakDelete(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/kontrak/${id}`)
        .then(() => {
          let z = this.kontrak_matakuliah
            .map((kontrak_matakuliah) => kontrak_matakuliah.id)
            .indexOf(id);
          this.kontrak_matakuliah.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      kontrak_matakuliah,
      kontrakDelete,
    };
  },
};
</script>