import {useState} from 'react';
import './styles.scss';
function FormInput() {
  const [validated, setValidated] = useState(false);
  const [city, setCity] = useState('');
  const [major, setMajor] = useState('');
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleClickSelect = (value) => {
    setCity(value)
  }

  console.log(major);
  return (
    <form className="row g-3 needs-validation p-5" novalidate>
      <div className='row'>
        <div className="col-md-2 text-left">
          <label for="validationCustom01" className="form-label">Họ và Tên</label>
        </div>
        <div className="col-md-10">
          <input type="text" className="form-control" id="validationCustom01" required />
        </div>
      </div>
      <div className='row'>
        <div className="col-md-2">
          <label for="validationCustom01" className="form-label">Nơi ở hiện tại</label>
        </div>
        <div className="col-md-5">
          <select onChange={(e) => handleClickSelect(e.target.value)} title='Tỉnh/thành' className="selectpicker" data-live-search="true" required>
            <option value='HCM'>TP HCM</option>
            <option value='Đồng Nai'>Đồng Nai</option>
          </select>
        </div>
        {
          city === 'HCM' ? (
            <div className="col-md-5" >
              <select title='Quận/huyện' id='selectProvince' className="selectpicker" data-live-search="true" required>
                <option value='Q.Tân Phú'>Q.Tân Phú</option>
                <option value='Q.Tân Bình'>Q.Tân Bình</option>
                <option value='Q.Bình Tân'>Q.Bình Tân</option>
              </select>
            </div>
          ) : city === 'Đồng Nai' ?

            (<div className="col-md-5">
              <select title='Quận/huyện' id='selectProvince' className="selectpicker" data-live-search="true" required>
                <option value='Tp Biên Hòa'>Tp Biên Hòa</option>
                <option value='H.Long Thành'>H.Long Thành</option>
                <option value='H.Xuân Lộc'>H.Xuân Lộc</option>
              </select>
            </div>) : null
        }
      </div>
      <div className='row'>
        <div className="col-md-2">
          <label for="validationCustom01" className="form-label">Quê quán</label>
        </div>
        <div className="col-md-5">
          <select title='Quê quán' id='selectHometown' className="selectpicker" data-live-search="true" required>
            <option value='HCM'>TP HCM</option>
            <option value='Đồng Nai'>Đồng Nai</option>
          </select>
        </div>
      </div>

      <div className='row'>
        <div className="col-md-2">
          <label for="validationCustom01" className="form-label">Trình độ</label>
        </div>
        <div className="col-md-5">
          <select title='Trình độ' id='selectHometown' className="selectpicker" data-live-search="true" required>
            <option value='Đại Học'>Đại Học</option>
            <option value='Cao Đẵng'>Cao Đẵng</option>
            <option value='Trung Cấp'>Trung Cấp</option>
          </select>
        </div>
      </div>

      <div className='row'>
        <div className="col-md-2">
          <label for="validationCustom01" className="form-label">Chuyên ngành</label>
        </div>
        <div className="col-md-5">
          <select onChange={(e) => setMajor(e.target.value)} title='Chuyên ngành' id='selectHometown' className="selectpicker" data-live-search="true" required>
            <option value='Kinh doanh dịch vụ'>Kinh doanh dịch vụ</option>
            <option value='Công nghệ thông tin'>Công nghệ thông tin</option>
          </select>
        </div>
      </div>

      {
        major ==='Kinh doanh dịch vụ' ? (
          <div className='row'>
            <div className="col-md-2">
              <label for="validationCustom01" className="form-label">Chức danh công việc</label>
            </div>
            <div className="col-md-5">
              <select title='Chức danh công việc' id='selectHometown' className="selectpicker" data-live-search="true" required>
                <option value='Giám đốc kinh doanh'>Giám đốc kinh doanh</option>
                <option value='Nhân viên kinh doanh'>Nhân viên kinh doanh</option>
              </select>
            </div>
          </div>
        ) : major === 'Công nghệ thông tin' ? (
          <div className='row'>
            <div className="col-md-2">
              <label for="validationCustom01" className="form-label">Chức danh công việc</label>
            </div>
            <div className="col-md-5">
              <select title='Chức danh công việc' id='selectHometown' className="selectpicker" data-live-search="true" required>
                <option value='Frontend Developer'>Frontend Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
              </select>
            </div>
          </div>
        ) : null
      }

      <div className='row'>
        <div className="col-md-2">
          <label for="validationCustom01" className="form-label">Lĩnh vực làm việc</label>
        </div>
        <div className="col-md-5">
          <select title='Lĩnh vực làm việc' id='selectHometown' className="selectpicker" data-live-search="true" required>
            <option value='Thương mại'> Thương mại</option>
            <option value='Dịch vụ'>Dịch vụ</option>
            <option value='Sản xuất'>Sản xuất</option>

          </select>
        </div>
      </div>

      <div className="col-12 text-center">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form >
  );
}

export default FormInput;