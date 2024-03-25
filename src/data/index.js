import ChangePrev1 from "../assets/img/changeprev1.jpg";
import Dispen1 from "../assets/img/dispen1.jpeg"

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "dispensables",
    text: "Dispensables",
  },
  {
    id: 3,
    path: "changepreventer",
    text: "Change Preventer",
  }
];


export const iconHome = [
  {
    id: 1,
    image: Dispen1,
    title: "The Dispensables",
    buy: "Baca Artikel",
    path:"dispensables",
    delay: "",
  },
  {
    id: 2,
    image: ChangePrev1,
    title: "Change Preventers",
    buy: "Baca Artikel",
    path: "changepreventer",
    delay: "200",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apa itu code smell?",
    desc: "Code smell adalah tanda-tanda atau indikasi dalam kode program yang menunjukkan adanya potensi masalah dalam desain atau implementasi kode tersebut.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Bagaimana cara mengidentifikasi code smell dalam sebuah proyek?",
    desc: "Code smell dapat diidentifikasi dengan mencari pola-pola tertentu seperti duplikasi kode, metode atau kelas yang terlalu panjang, penggunaan variabel yang ambigu, atau ketergantungan berlebihan antar kelas.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Mengapa code smell perlu diperhatikan?",
    desc: "Code smell perlu diperhatikan karena dapat menjadi indikasi adanya masalah yang lebih serius dalam kode, seperti kompleksitas yang tidak perlu, kerentanan terhadap bug, atau kesulitan dalam pemeliharaan dan pengembangan kode di masa depan.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apa perbedaan antara code smell dan bug?",
    desc: "Code smell adalah tanda-tanda potensial bahwa ada masalah dalam kode, sementara bug adalah kesalahan konkret yang menyebabkan perilaku yang tidak diinginkan atau tidak benar dalam aplikasi.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Bagaimana cara menangani code smell?",
    desc: "Cara menangani code smell tergantung pada jenis dan tingkat keparahan masalahnya. Ini bisa melibatkan refaktorisasi kode, penambahan komentar, penggunaan desain pola yang lebih baik, atau penghapusan kode yang tidak diperlukan.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Apakah semua code smell harus diperbaiki?",
    desc: "Tidak selalu. Beberapa code smell mungkin tidak signifikan atau tidak berdampak secara langsung pada kualitas atau kinerja aplikasi. Namun, ada baiknya untuk mempertimbangkan diperbaiki karena dapat meningkatkan keterbacaan dan pemeliharaan kode.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "Apakah setiap code smell berarti kode tersebut buruk?",
    desc: "Tidak selalu. Beberapa code smell mungkin ada karena keterbatasan teknis atau situasi khusus dalam pengembangan perangkat lunak. Namun, lebih baik untuk melakukan evaluasi lebih lanjut untuk memastikan bahwa code smell tersebut tidak menjadi masalah yang lebih besar di masa depan.",
  },
  {
    id: 8,
    eventKey: 7,
    title: "Bagaimana mencegah code smell muncul dalam pengembangan perangkat lunak?",
    desc: "Mencegah code smell melibatkan praktik pengembangan yang baik, seperti pemikiran desain yang baik sejak awal, melakukan refaktorisasi secara berkala, menggunakan pola desain yang tepat, dan mengikuti prinsip-prinsip pemrograman yang baik seperti SOLID dan DRY.",
  },
];

export const comments = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class Calculator {
      // This method adds two numbers
      public int add(int a, int b) {
          return a + b;
      }
  
      // This method subtracts two numbers
      public int subtract(int a, int b) {
          return a - b;
      }
  
      // This method multiplies two numbers
      public int multiply(int a, int b) {
          return a * b;
      }
  
      // This method divides two numbers
      public double divide(int a, int b) {
          if (b == 0) {
              // Handle division by zero
              return Double.NaN;
          }
          return (double) a / b;
      }
  }`,
    penjelasan: "Comment sering digunakan untuk menjelaskan apa yang dilakukan oleh kode. Namun, jika kode itu sendiri sudah cukup jelas, komentar bisa menjadi redundan dan memenuhi ruang yang tidak perlu.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `public class Calculator {
      public int add(int a, int b) {
          return a + b;
      }
  
      public int subtract(int a, int b) {
          return a - b;
      }
  
      public int multiply(int a, int b) {
          return a * b;
      }
  
      public double divide(int a, int b) {
          if (b == 0) {
              return Double.NaN;
          }
          return (double) a / b;
      }
  }`,
    penjelasan: "Sebelum refactoring, setiap metode diikuti oleh komentar yang menjelaskan apa yang dilakukan oleh metode tersebut. Namun, karena metode tersebut sudah cukup jelas dari namanya dan implementasinya, komentar menjadi redundan. Setelah refactoring, komentar dihapus karena tidak lagi diperlukan.",
  }
];

export const duplicate = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class MathOperations {
      public int add(int a, int b) {
          return a + b;
      }
  
      public int subtract(int a, int b) {
          return a - b;
      }
  
      public int multiply(int a, int b) {
          return a * b;
      }
  
      public int divide(int a, int b) {
          return a / b;
      }
  
      public double calculateAverage(int[] numbers) {
          int sum = 0;
          for (int number : numbers) {
              sum += number;
          }
          return (double) sum / numbers.length;
      }
  }`,
    penjelasan: "Duplicat code terjadi ketika potongan kode yang sama atau serupa muncul di beberapa tempat dalam program.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `public class MathOperations {
      public int add(int a, int b) {
          return a + b;
      }
  
      public int subtract(int a, int b) {
          return a - b;
      }
  
      public int multiply(int a, int b) {
          return a * b;
      }
  
      public int divide(int a, int b) {
          return a / b;
      }
  
      public double calculateAverage(int[] numbers) {
          return sum(numbers) / (double) numbers.length;
      }
  
      private int sum(int[] numbers) {
          int sum = 0;
          for (int number : numbers) {
              sum += number;
          }
          return sum;
      }
  }`,
    penjelasan: "Sebelum refactoring, ada duplikat dalam logika untuk menghitung rata-rata di metode calculateAverage dan metode sum. Setelah refactoring, logika untuk menghitung total sudah dipisahkan ke dalam metode sum, yang kemudian digunakan di metode calculateAverage. Hal ini menghindari duplikasi kode dan membuat kode lebih bersih dan lebih mudah dipelihara.",
  }
];

export const lazyclass = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class Employee {
      private String name;
      private String id;
  
      // Constructors, getters, and setters
  }`,
    penjelasan: "Lazy class adalah kelas yang tidak memberikan nilai tambah yang cukup signifikan dalam program. Mereka mungkin memiliki sedikit atau tidak ada metode atau logika bisnis yang kompleks.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `// Potentially refactored version
    // If additional behavior or value is added in the future
    
    public class Employee {
        private String name;
        private String id;
        private Department department;
    
        public Employee(String name, String id, Department department) {
            this.name = name;
            this.id = id;
            this.department = department;
        }
    
        public String getName() {
            return name;
        }
    
        public String getId() {
            return id;
        }
    
        public Department getDepartment() {
            return department;
        }
    
        // Additional methods can be added if necessary
    }`,
    penjelasan: "Setelah refactoring, kita dapat menambahkan fungsionalitas atau perilaku tambahan ke dalam class Employee jika dibutuhkan di masa depan. Dalam contoh ini, kita telah menambahkan atribut Department dan metode untuk mendapatkan departemen seorang karyawan.",
  }
];

export const dataclass = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class Rectangle {
      private double width;
      private double height;
  
      // Constructors, getters, and setters
  }`,
    penjelasan: "Data Class adalah kelas yang hanya berisi data tanpa adanya logika bisnis tambahan. Mereka digunakan untuk menyimpan informasi tetapi tidak memiliki perilaku yang terkait dengannya.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `// Potentially refactored version
    // If additional behavior is added in the future
    
    public class Rectangle {
        private double width;
        private double height;
    
        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
    
        public double calculateArea() {
            return width * height;
        }
    
        // Additional methods can be added if necessary
    }`,
    penjelasan: "Setelah refactoring, kita dapat menambahkan perilaku tambahan ke dalam class Rectangle jika dibutuhkan di masa depan. Dalam contoh ini, kita telah menambahkan metode calculateArea untuk menghitung luas persegi panjang.",
  }
];

export const deadcode = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class Calculator {
      public int add(int a, int b) {
          return a + b;
      }
  
      public int subtract(int a, int b) {
          return a - b;
      }
  
      // This method is never called
      public int multiply(int a, int b) {
          return a * b;
      }
  
      // This method is never called
      public double divide(int a, int b) {
          if (b == 0) {
              return Double.NaN;
          }
          return (double) a / b;
      }
  }`,
    penjelasan: "Dead Code adalah bagian dari program yang tidak pernah dipanggil atau dieksekusi.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `// Potentially refactored version
    // If methods are needed in the future
    
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
    
        public int subtract(int a, int b) {
            return a - b;
        }
    
        // Uncomment if needed in the future
        /*
        public int multiply(int a, int b) {
            return a * b;
        }
    
        public double divide(int a, int b) {
            if (b == 0) {
                return Double.NaN;
            }
            return (double) a / b;
        }
        */
    }`,
    penjelasan: "Setelah refactoring, kode yang tidak pernah dipanggil atau dieksekusi di-comment untuk menghindari kebingungan dan membuat kode lebih bersih. Jika metode tersebut dibutuhkan di masa depan, komentar bisa dihapus untuk mengaktifkannya kembali.",
  }
];

export const speculative = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public interface Shape {
      void draw();
      void resize();
      void move();
  }
  
  public class Circle implements Shape {
      @Override
      public void draw() {
          // Draw circle
      }
  
      @Override
      public void resize() {
          // Resize circle
      }
  
      @Override
      public void move() {
          // Move circle
      }
  }`,
    penjelasan: "Sebelum refactoring, kita memiliki interface Shape dengan metode draw, resize, dan move. Namun, implementasi class Circle hanya menggunakan metode draw, sedangkan metode resize dan move tidak digunakan.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `// Potentially refactored version
    // If additional methods are needed in the future
    
    public interface Shape {
        void draw();
    }
    
    public class Circle implements Shape {
        @Override
        public void draw() {
            // Draw circle
        }
    }`,
    penjelasan: "Setelah refactoring, kita hanya mempertahankan fungsionalitas yang dibutuhkan saat ini, yaitu metode draw, dan menghapus metode resize dan move dari interface Shape. Jika di masa depan diperlukan, kita dapat menambahkan kembali metode-metode tersebut.",
  }
];

export const divergent = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class Order {
      private int orderId;
      private String customerName;
  
      public void processOrder() {
          // process the order
      }
  
      public void generateInvoice() {
          // generate invoice
      }
  
      public void updateOrderStatus() {
          // update order status
      }
  }`,
    penjelasan: "Divergent Change terjadi ketika satu kelas sering dimodifikasi untuk alasan yang berbeda. Dalam kasus ini, jika ada perubahan dalam logika memproses order, kita mungkin juga harus memperbarui metode generateInvoice atau updateOrderStatus juga. Ini meningkatkan kompleksitas perubahan dan membuatnya rentan terhadap kesalahan.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `public class Order {
      private int orderId;
      private String customerName;
  
      public void processOrder() {
          // process the order
      }
  }
  
  public class Invoice {
      public void generateInvoice() {
          // generate invoice
      }
  }
  
  public class OrderStatus {
      public void updateOrderStatus() {
          // update order status
      }
  }`,
    penjelasan: "Sebelum refactoring, class Order bertanggung jawab untuk melakukan tiga tugas yang berbeda: memproses order, menghasilkan invoice, dan memperbarui status order. Setelah refactoring, tanggung jawab ini dipisahkan ke dalam class-class yang berbeda, sehingga setiap class hanya bertanggung jawab untuk satu tugas, menghindari perubahan yang divergen pada class Order.",
  }
];

export const shotgun = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `public class ShoppingCart {
      private List<Item> items;
  
      public void addItem(Item item) {
          items.add(item);
      }
  
      public void removeItem(Item item) {
          items.remove(item);
      }
  
      public void calculateTotal() {
          // calculate total
      }
  }
  
  public class Order {
      private List<Item> items;
  
      public void addItem(Item item) {
          items.add(item);
      }
  
      public void removeItem(Item item) {
          items.remove(item);
      }
  
      public void calculateTotal() {
          // calculate total
      }
  
      public void generateInvoice() {
          // generate invoice
      }
  }`,
    penjelasan: "Kedua kelas, ShoppingCart dan Order, memiliki metode yang serupa untuk menambah dan menghapus item dari daftar, serta menghitung total belanja. Jika ada perubahan dalam logika menambah atau menghapus item, kita harus mengubah kedua kelas tersebut.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `public class ShoppingCart {
      private List<Item> items;
  
      public void addItem(Item item) {
          items.add(item);
      }
  
      public void removeItem(Item item) {
          items.remove(item);
      }
  
      public void calculateTotal() {
          // calculate total
      }
  }
  
  public class Order {
      private List<Item> items;
  
      public void addItem(Item item) {
          items.add(item);
      }
  
      public void removeItem(Item item) {
          items.remove(item);
      }
  
      public void calculateTotal() {
          // calculate total
      }
  
      public void generateInvoice() {
          // generate invoice
      }
  }`,
    penjelasan: "Sebelum refactoring, perubahan dalam metode addItem atau removeItem di ShoppingCart dan Order memerlukan perubahan di kedua class. Setelah refactoring, keduanya menjadi identik, sehingga perubahan dalam salah satu class tidak lagi memerlukan perubahan di class lain, mengurangi kemungkinan shotgun surgery.",
  }
];

export const parallel = [
  {
    id: 1,
    eventKey: 0,
    title: "Before Refactor",
    desc: `// Hierarki pertama
    public class Employee {
        private String name;
        private String employeeId;
        // other attributes and methods
    }
    
    public class FullTimeEmployee extends Employee {
        private double salary;
        // other attributes and methods specific to full-time employees
    }
    
    public class PartTimeEmployee extends Employee {
        private double hourlyRate;
        // other attributes and methods specific to part-time employees
    }
    
    // Hierarki kedua
    public class Project {
        private String projectName;
        // other attributes and methods
    }
    
    public class FullTimeProject extends Project {
        private FullTimeEmployee projectManager;
        // other attributes and methods specific to projects managed by full-time employees
    }
    
    public class PartTimeProject extends Project {
        private PartTimeEmployee projectManager;
        // other attributes and methods specific to projects managed by part-time employees
    }`,
    penjelasan: "Parallel Inheritance Hierarchies terjadi ketika dua hierarki kelas berbeda memiliki hubungan satu sama lain, sehingga perubahan dalam satu hierarki mengharuskan perubahan dalam hierarki yang lain.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "After Refactor",
    desc: `public class Employee {
      private String name;
      private String employeeId;
      // other attributes and methods
  }
  
  public class Project {
      private String projectName;
      // other attributes and methods
  }
  
  public class FullTimeEmployee extends Employee {
      private double salary;
      // other attributes and methods specific to full-time employees
  }
  
  public class PartTimeEmployee extends Employee {
      private double hourlyRate;
      // other attributes and methods specific to part-time employees
  }
  
  public class ProjectManager {
      private Employee employee; // Generalize to Employee
      // other attributes and methods
  }
  
  public class FullTimeProject extends Project {
      private ProjectManager projectManager;
      // other attributes and methods specific to projects managed by full-time employees
  }
  
  public class PartTimeProject extends Project {
      private ProjectManager projectManager;
      // other attributes and methods specific to projects managed by part-time employees
  }`,
    penjelasan: "Sebelumnya, dua hierarki paralel: karyawan dan proyek. Setelah refactoring, satu hierarki untuk karyawan dan satu untuk proyek. Penggunaan kelas tambahan seperti ProjectManager untuk mengelola hubungan, mengurangi ketergantungan dan perubahan saling terkait.",
  }
];