const images = [
  'vanh-dai-3.jpg',
  'toa-hoa-hau.jpg',
  'tien-ich-vuon.jpg',
  'toan-canh-ban-ngay.jpg',
  'tong-the-ban-dem.jpg',
  'tropical-dem.jpg',
  'vườn-nhật-1.jpg',
  'vườn-nhật-2.jpg'
];

images.forEach((filename, index) => {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';
  const img = document.createElement('img');
  img.src = `../assets/images/${filename}`;
  img.alt = filename;
  img.className = 'gallery-img';
  col.appendChild(img);

  // Phân bổ ảnh theo nhóm
  if (index < 3) {
    document.getElementById('gallery-top').appendChild(col);
  } else if (index < 6) {
    document.getElementById('gallery-middle').appendChild(col);
  } else {
    col.className = 'col-md-5 mb-4'; // chỉnh lại để ảnh lớn hơn và hiển thị đẹp hơn
    document.getElementById('gallery-bottom').appendChild(col);
  }
});
Z