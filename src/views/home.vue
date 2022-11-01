<template>
    <!-- bagian pertama -->
    <div>
        <div class="judul-satu ">tentang klinik karunia sehat</div>
        <div class="text-xl">Seluruh karyawan Klinik Karunia Sehat Desa Pasuruan Kecamatan Penengahan, mengucapkan
            selamat datang
            bagi para pengunjung website
            Klinik kami.
            Di zaman kemajuan teknologi informasi saat ini membuat informasi akan menjadi lebih mudah, transparansi
            menjadi kata
            kunci yang sangat penting. Kita dapat berinteraksi tidak terbatas oleh tempat dan waktu.
            Hal ini juga bermanfaat bagi peningkatan mutu layanan kami kepada masyarakat, khususnya bagi kami di Klinik
            Karunia Sehat. Dengan adanya website ini diharapkan mampu meningkatkan pelayanan kesehatan pada masyarakat,
            dan
            komunikasi timbal
            balik antara masyarakat dan puskesmas dapat dilaksanakan dengan mudah.
            Akhir kata, semoga dengan adanya website ini pula, kami berharap masyarakat dapat mengenal Klinik Karunia
            Sehat dengan lebih dalam dan bersedia memanfaatkan pelayanan kami, sehingga kami dapat terus
            berkomitmen dalam meningkatkan pelayanan kesehatan.</div>
    </div>

    <!-- bagian kedua -->
    <div>
        <div class="judul-satu">alamat maps kami</div>
        <div class=" bg-gray-400 aspect-video">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.7470714154365!2d105.6849341153749!3d-5.749505595833192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e410f094b3cd7a9%3A0xe3ba58a13d181c10!2sKLINIK%20PRATAMA%20KARUNIA%20SEHAT!5e0!3m2!1sen!2sid!4v1667170086047!5m2!1sen!2sid"
                width=100% height=100% style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div>
        <div class="judul-satu">tim klinik karunia sehat</div>
        <div class="flex justify-center ">
            <div v-for="tim in tims" :key="tim.id" class="px-10 grid grid-cols-1 justify-items-center ">
                <img class="inline object-cover w-24 md:w-32 h-24 md:h-32 m-1 rounded-full " :src="tim.linkGambar"
                    alt="">
                <div class="text-center text-md md:text-xl capitalize">{{tim.nama}} </div>
                <div class="text-center text-sm md:text-md capitalize">{{tim.penanggungjawab}} </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import imageSatu from '/src/assets/satu.jpeg'
import imageDua from '/src/assets/dua.png'
import imageTiga from '/src/assets/hamzah.jpg'
import imageEmpat from "/src/assets/yusuf.jpeg"
import imageLima from "/src/assets/eko.jpeg"
import imageEnam from "/src/assets/robi.jpeg"


const tims = ref([
    {
        id: '1',
        nama: 'ahmad yusuf maulana',
        penanggungjawab: 'web developer',
        linkGambar: imageEmpat
    },
    {
        id: '2',
        nama: 'robiyanto',
        penanggungjawab: 'konten kreator',
        linkGambar: imageEnam
    },
])

</script>

<style scoped>

</style>