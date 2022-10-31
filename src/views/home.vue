<template>
    <!-- bagian pertama -->
    <div>
        <div class="judul-satu ">tentang klinik karunia sehat</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur ab veniam totam nisi
            itaque
            omnis consequatur debitis, sapiente nemo eum molestias aspernatur ad architecto. Modi ipsum possimus
            temporibus.
            Dolorum?
            Beatae corporis enim exercitationem, quidem repellendus, assumenda similique aspernatur sit voluptas unde
            ipsa
            minima molestias et asperiores expedita, vel facere! Laborum omnis dolorum saepe sunt quae iste minus
            voluptatum
            aliquam?
            Animi consectetur provident maxime blanditiis repellat explicabo, corporis impedit. Quibusdam qui quia nihil
            corrupti, officiis quod vel nesciunt, ipsa dolore tempore harum! Fuga accusamus exercitationem natus
            molestiae.
            Soluta, eveniet similique!
            Sapiente incidunt fugiat, atque ab porr</div>
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
        <div class="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
            <div v-for="tim in tims" :key="tim.id" class="px-10 grid grid-cols-1 justify-items-center ">
                <img class="inline object-cover w-24 md:w-32 h-24 md:h-32 m-1 rounded-full " :src="tim.linkGambar"
                    alt="">
                <div class="text-center text-md md:text-xl capitalize">{{tim.nama}} </div>
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

const tims = ref([
    {
        id: '1',
        nama: 'ahmad yusuf maulana',
        penanggungjawab: 'web developer',
        linkGambar: imageSatu
    },
    {
        id: '2',
        nama: 'muhammad robiyanto sertamulyo',
        penanggungjawab: 'konten kreator',
        linkGambar: imageDua
    },
    {
        id: '3',
        nama: 'muhammad ali',
        penanggungjawab: 'dokter',
        linkGambar: imageTiga
    },
    {
        id: '4',
        nama: 'abul khanafi',
        penanggungjawab: 'asisten dokter',
        linkGambar: imageEmpat
    },
    {
        id: '5',
        nama: 'agus prasetyo',
        penanggungjawab: 'apoteker',
        linkGambar: imageLima
    },
])

</script>

<style scoped>

</style>