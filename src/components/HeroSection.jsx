const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

function HeroSection() {
  return (
    <div>
      <section id="home" className="app-container p-24 pb-12 overflow-hidden sm:overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/*Left content*/}
            <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text  whitespace-nowrap">Artificial Intelligence</span>
                  <br/>
                  for a Smarter Future
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Discover how AI is transforming industries and improving
                  lives worldwide. Our cutting-edge solutions harness the
                  power of machine learning to solve complex problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#" className="btn-primary">Explore AI Solutions</a>
                    <a href="#" className="btn-outline">Learn More</a>
                </div>
                
                <div className="pt-4 flex items-center space-x-4">
                   <div className="flex -space-x-2">
                       {images.map((img,i) =>{
                        return(
                         <img 
                         key={i}
                         className="avatar"
                         src={img}
                         alt={`User ${i + 1}`} />
                        );
                       })}
                   </div>
                   <p className="text-sm font-medium text-gray-600">Trusted by <span className="text-primary font-bold">10,000+</span> people worldwide</p>
                </div>
                
            </div>

            {/*Right content*/}
            <div>
              
            </div>

          </div>
      </section>
    </div>
  )
}

export default HeroSection
  
