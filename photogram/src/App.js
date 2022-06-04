import { useState } from "react";

import ImageGrid from "./components/ImageGrid";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import Modal from "./components/Modal";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
};

export default App;
