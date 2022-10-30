import React from 'react'
import MemberCard from './MemberCard';


function About(props) {
  return (

    <div className="vh-300 bg-gray-500">
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
            <h2 className='uppercase self-start'>fps team</h2>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/members/sarthak.jpg")} BwImg={require("../../static/members/sarthak_bw.jpg")} Name='Sarthak Nandre' Post='FPS Head' Insta='https://www.instagram.com/sarthak_nandre31/' />
              <MemberCard Imglink={require("../../static/members/aditya.jpg")} BwImg={require("../../static/members/aditya_bw.jpg")} Name='Aditya Deshpande' Post='Battle Royale Head' Insta='https://www.instagram.com/donttaketension2.0/' />
              <MemberCard Imglink={require("../../static/members/saatvik.jpg")} BwImg={require("../../static/members/saatvik_bw.jpg")} Name='Saattvik Thourwal' Post='Streaming Team Head' Insta='https://www.instagram.com/saattvik/' />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About