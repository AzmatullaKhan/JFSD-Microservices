package com.klu.services;

import com.klu.model.ImageEntity;
import com.klu.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public ImageEntity saveImages(MultipartFile data1, MultipartFile data2, MultipartFile data3, MultipartFile data4, MultipartFile data5, String name, String cost, String materialused, String description, String publisher) throws IOException {
        ImageEntity imageEntity = new ImageEntity();

        imageEntity.setName(name);
        imageEntity.setCost(cost);
        imageEntity.setMaterialused(materialused);
        imageEntity.setDescription(description);
        imageEntity.setPublisher(publisher);
        
        imageEntity.setType(data1.getContentType());
        
        imageEntity.setData1(data1.getBytes());
        imageEntity.setData2(data2.getBytes());
        imageEntity.setData3(data3.getBytes());
        imageEntity.setData4(data4.getBytes());
        imageEntity.setData5(data5.getBytes());

        return imageRepository.save(imageEntity);
    }

    public ImageEntity getImageById(Long id) {
        return imageRepository.findById(id).orElse(null);
    }
    
    public List<ImageEntity> getAllImages(){
    	return imageRepository.findAll();
    }
}
