import React from 'react'
import MemberCard from './MemberCard';
import line from '../../static/line.png'
import love from '../../static/love_sticker.png'
import Footer from '../Footer'

function About(props) {
  return (

    <div className=" bg-gray-500">
      <div className='pt-36'>
        <div className='flex flex-col items-start w-full'>
          <h1 className='uppercase px-24 pb-12 text-gray-300 text-5xl'>Meet the team</h1>
          <div className='container mx-auto my-auto flex flex-wrap flex-col items-center space-y-12'>
            <div className='flex items-center text-center space-x-12' style={{ '--at0': '0', '--at100': '-349px * 3' }}>


              <MemberCard Imglink={require("../../static/members/sahil.jpg")} BwImg={require("../../static/members/sahil_bw.jpg")} Name='Sahil Rapartiwar' Post='Head of Gaming Club' Insta='https://www.instagram.com/sahil_rapartiwar_/' />
            </div>

            <h2 className='uppercase self-start'>esports team</h2>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/sarvesh.jpg")} BwImg={require("../../static/members/sarvesh_bw.jpg")} Name='Sarvesh Aware' Post='Esports Head' Insta='https://www.instagram.com/sarvesh128/' />
              <MemberCard Imglink={require("../../static/members/atharva.jpg")} BwImg={require("../../static/members/atharva_bw.jpg")} Name='Atharva Dhore' Post='Member- Esports Team' Insta='https://www.instagram.com/atharva_dhore_7_/' />
              <MemberCard Imglink={require("../../static/members/nikhil.jpg")} BwImg={require("../../static/members/nikhil_bw.jpg")} Name='Nikhil Wadhera' Post='Member- Esports Team' Insta='https://www.instagram.com/nwadhera13/' />

            </div>


            <h2 className='uppercase self-start'>fps team</h2>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/sarthak.jpg")} BwImg={require("../../static/members/sarthak_bw.jpg")} Name='Sarthak Nandre' Post='FPS Head' Insta='https://www.instagram.com/sarthak_nandre31/' />
              <MemberCard Imglink={require("../../static/members/tanay.jpg")} BwImg={require("../../static/members/tanay_bw.jpg")} Name='Tanay Khandelwal' Post='Member- FPS Team' Insta='https://www.instagram.com/tanay_2601/' />
              <MemberCard Imglink={require("../../static/members/karthikeya.jpg")} BwImg={require("../../static/members/karthikeya_bw.jpg")} Name='Kartikeya Yadav' Post='Member- FPS Team' Insta='https://www.instagram.com/_kartikeya_yadav_/' />

            </div>

            <h2 className='uppercase self-start'>battle royale team</h2>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/aditya.jpg")} BwImg={require("../../static/members/aditya_bw.jpg")} Name='Aditya Deshpande' Post='Battle Royale Head' Insta='https://www.instagram.com/donttaketension2.0/' />
              <MemberCard Imglink={require("../../static/members/shaikh.jpg")} BwImg={require("../../static/members/shaikh_bw.jpg")} Name='Shaikh Baba' Post='Member- Battle Royale Team' Insta='https://www.instagram.com/shaikh_2021/' />
              <MemberCard Imglink={require("../../static/members/abhishek.jpg")} BwImg={require("../../static/members/abhishek_bw.jpg")} Name='Abhishek Kumar' Post='Member- Battle Royale Team' Insta='https://www.instagram.com/abhishek934122/' />

            </div>

            <div className='flex flex-row items-center text-center space-x-12'>
              <div className='flex flex-col items-center'>
                <h2 className='w-full uppercase self-start mb-4'>streaming team</h2>
                <MemberCard Imglink={require("../../static/members/saatvik.jpg")} BwImg={require("../../static/members/saatvik_bw.jpg")} Name='Saattvik Thourwal' Post='Streaming Team Head' Insta='https://www.instagram.com/saattvik/' />
              </div>
              <div className='flex flex-col items-center'>
                <h2 className='w-full uppercase self-start mb-4'>social media team</h2>
                <MemberCard Imglink={require("../../static/members/priyanshu_verma.jpg")} BwImg={require("../../static/members/priyanshu_verma_bw.jpg")} Name='Priyanshu Verma' Post='Social Media Team Head' Insta='https://www.instagram.com/v_e_r_m_a_j_i_18/' />
              </div>
              <div className='flex flex-col items-center'>
                <h2 className='w-full uppercase self-start mb-4'>Treasurer</h2>
                <MemberCard Imglink={require("../../static/members/tarun.jpg")} BwImg={require("../../static/members/tarun_bw.jpg")} Name='Tarun Balaji' Post='Treasurer' Insta='https://www.instagram.com/tarunbalaji2003/' />
              </div>
            </div>

            <div className='flex flex-row items-center text-start space-x-12'>
              <div className='flex flex-col'>
                <h2 className='w-full uppercase self-start mb-4'>creative team</h2>
                <div className='flex flex-row items-center text-center space-x-12'>
                  <MemberCard Imglink={require("../../static/members/priyanshu.jpg")} BwImg={require("../../static/members/priyanshu_bw.jpg")} Name='Priyanshu Kumbhare' Post='Creative Team Head' Insta='https://www.instagram.com/priyanshu_k157/' />
                  <MemberCard Imglink={require("../../static/members/sarthak_agarwal.jpg")} BwImg={require("../../static/members/sarthak_agarwal_bw.jpg")} Name='sarthak agarwal' Post='Member- Creative Team' Insta='https://www.instagram.com/_sarthak._.agarwal/' />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <h2 className='w-full uppercase self-start mb-4'>single player team</h2>
                <MemberCard Imglink={require("../../static/members/sai.jpg")} BwImg={require("../../static/members/sai_bw.jpg")} Name='sai uma jayanth' Post='single player team head' Insta='https://www.instagram.com/jayanth_001/' />
              </div>
            </div>

            <h2 className='uppercase self-start'>marketing team</h2>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/pushkal.jpg")} BwImg={require("../../static/members/pushkal_bw.jpg")} Name='pushkal M' Post='Marketing Head' Insta='https://www.instagram.com/pushkal_madhawacharya/' />
              <MemberCard Imglink={require("../../static/members/vishwanath.jpg")} BwImg={require("../../static/members/vishwanath_bw.jpg")} Name='vishwanath dorlikar' Post='Member- Marketing Team' Insta='https://www.instagram.com/vishwanath_dorlikar/' />
              <MemberCard Imglink={require("../../static/members/manya.jpg")} BwImg={require("../../static/members/manya_bw.jpg")} Name='manya Rajib Jain' Post='Member- Marketing Team' Insta='https://www.instagram.com/manyarajib/' />

            </div>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/ayush.jpg")} BwImg={require("../../static/members/ayush_bw.jpg")} Name='ayush Shukla' Post='Member- Marketing Team' Insta='https://www.instagram.com/ayush_s746/' />
              <MemberCard Imglink={require("../../static/members/rajesh.jpg")} BwImg={require("../../static/members/rajesh_bw.jpg")} Name='rajesh devulapalli' Post='Member- Marketing Team' Insta='https://www.instagram.com/rajesh.dev_/' />

            </div>
            <h2 className='uppercase self-start'>Game Dev team</h2>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/priyanshu_govind.jpg")} BwImg={require("../../static/members/priyanshu_govind_bw.jpg")} Name='priyanshu govind rao' Post='Game Dev Head' Insta='https://www.instagram.com/frankenstein_0211/' />
              <MemberCard Imglink={require("../../static/members/vedant.jpg")} BwImg={require("../../static/members/vedant_bw.jpg")} Name='vedant agarwal' Post='Member- Game Dev Team' Insta='https://www.instagram.com/vedant.2105/' />

            </div>


          </div>
          <div className='mt-8 flex flex-coll w-full vh-40 bg-black'><h2 className='w-full text-white text-center text-sm mt-2'>Made with ❤ by Tarun, Sarthak and Vedant</h2></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About